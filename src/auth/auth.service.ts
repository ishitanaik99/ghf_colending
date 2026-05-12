import { Injectable, Logger, UnauthorizedException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';

import { UserAuth } from '../entities/user-auth.entity';
import { LoginRequestDto } from '../dto/auth/login-request.dto';
import { VerifyOtpRequestDto } from '../dto/auth/verify-otp-request.dto';
import { AuthResponseDto } from '../dto/auth/auth-response.dto';
import { JwtTokenService } from './jwt.service';
import { OtpService } from './otp.service';
import { CookieService } from './cookie.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(UserAuth)
    private readonly userAuthRepository: Repository<UserAuth>,
    private readonly jwtTokenService: JwtTokenService,
    private readonly otpService: OtpService,
    private readonly cookieService: CookieService,
    private readonly configService: ConfigService,
  ) {}

  // ── POST /auth/login ────────────────────────────────────────────────────────
  async login(dto: LoginRequestDto): Promise<AuthResponseDto> {
    // 1. Find user by email
    const userAuth = await this.userAuthRepository.findOne({
      where: { email: dto.email },
      relations: ['partner'],
    });
    if (!userAuth) throw new UnauthorizedException('INVALID_CREDENTIALS');

    // 2. Check account state
    if (!userAuth.isActive) throw new ForbiddenException('ACCOUNT_DISABLED');

    // 3. Verify password
    const passwordMatch = await bcrypt.compare(dto.password, userAuth.passwordHash);
    if (!passwordMatch) throw new UnauthorizedException('INVALID_CREDENTIALS');

    // 4. Generate OTP
    const rawOtp = this.otpService.generateOtp();
    const hashedOtp = this.otpService.hashOtp(rawOtp);

    // 5. Persist OTP — reset attempts on fresh login
    const expiryMinutes = this.configService.get<number>('app.otp.expiryMinutes')!;
    userAuth.otpHash = hashedOtp;
    userAuth.otpExpiry = new Date(Date.now() + expiryMinutes * 60 * 1000);
    userAuth.otpAttempts = 0;
    userAuth.updatedAt = new Date();
    await this.userAuthRepository.save(userAuth);

    // 6. Send OTP via Email
    await this.otpService.sendOtp(userAuth.email, rawOtp);

    return { message: 'OTP sent to registered email' };
  }

  // ── POST /auth/verify-otp ───────────────────────────────────────────────────
  async verifyOtp(dto: VerifyOtpRequestDto, res: Response): Promise<AuthResponseDto> {
    // 1. Find user
    const userAuth = await this.userAuthRepository.findOne({ where: { email: dto.email } });
    if (!userAuth) throw new NotFoundException('USER_NOT_FOUND');

    // 2. Increment attempt before validation (prevents timing attacks)
    userAuth.otpAttempts = (userAuth.otpAttempts ?? 0) + 1;
    await this.userAuthRepository.save(userAuth);

    // 3. Validate OTP (throws on failure)
    const valid = this.otpService.validateOtp(userAuth, dto.otp);
    if (!valid) throw new UnauthorizedException('INVALID_OTP');

    // 4. Clear OTP fields after successful verification
    userAuth.otpHash = null;
    userAuth.otpExpiry = null;
    userAuth.otpAttempts = 0;
    userAuth.isVerified = true;
    userAuth.lastLoginAt = new Date();
    userAuth.updatedAt = new Date();

    // 5. Generate tokens
    const accessToken = this.jwtTokenService.generateAccessToken(userAuth);
    const refreshToken = this.jwtTokenService.generateRefreshToken(userAuth);

    // 6. Store refresh token hash in DB (reuse sha-256 util)
    userAuth.refreshTokenHash = this.otpService.hashOtp(refreshToken);
    await this.userAuthRepository.save(userAuth);

    // 7. Set HttpOnly refresh token cookie
    this.cookieService.setRefreshTokenCookie(res, refreshToken);

    return { accessToken, message: 'Login successful' };
  }

  // ── POST /auth/refresh ──────────────────────────────────────────────────────
  async refreshToken(req: Request): Promise<AuthResponseDto> {
    // 1. Extract refresh token from cookie
    const refreshToken = this.cookieService.extractRefreshToken(req);
    if (!refreshToken) throw new UnauthorizedException('REFRESH_TOKEN_MISSING');

    // 2. Validate token signature + expiry
    if (!this.jwtTokenService.validateToken(refreshToken)) {
      throw new UnauthorizedException('INVALID_REFRESH_TOKEN');
    }

    // 3. Look up user
    const email = this.jwtTokenService.extractEmail(refreshToken);
    const userAuth = await this.userAuthRepository.findOne({ where: { email } });
    if (!userAuth) throw new NotFoundException('USER_NOT_FOUND');

    // 4. Verify stored hash matches (ensures logout invalidation works)
    const incomingHash = this.otpService.hashOtp(refreshToken);
    if (incomingHash !== userAuth.refreshTokenHash) {
      throw new UnauthorizedException('REFRESH_TOKEN_REVOKED');
    }

    // 5. Issue new access token
    const newAccessToken = this.jwtTokenService.generateAccessToken(userAuth);
    return { accessToken: newAccessToken, message: 'Token refreshed' };
  }

  // ── POST /auth/logout ───────────────────────────────────────────────────────
  async logout(req: Request, res: Response): Promise<void> {
    const refreshToken = this.cookieService.extractRefreshToken(req);

    if (refreshToken && this.jwtTokenService.validateToken(refreshToken)) {
      const email = this.jwtTokenService.extractEmail(refreshToken);
      const userAuth = await this.userAuthRepository.findOne({ where: { email } });
      if (userAuth) {
        userAuth.refreshTokenHash = null;
        userAuth.updatedAt = new Date();
        await this.userAuthRepository.save(userAuth);
      }
    }

    this.cookieService.clearRefreshTokenCookie(res);
  }

  // ── GET /auth/me ─────────────────────────────────────────────────────────────
  async getCurrentUser(email: string): Promise<Record<string, unknown>> {
    const userAuth = await this.userAuthRepository.findOne({
      where: { email },
      relations: ['partner'],
    });
    if (!userAuth) throw new NotFoundException('USER_NOT_FOUND');

    return {
      email: userAuth.email,
      partnerId: userAuth.userId,
      partnerName: userAuth.partner?.name ?? null,
      status: userAuth.partner?.status ?? null,
    };
  }
}