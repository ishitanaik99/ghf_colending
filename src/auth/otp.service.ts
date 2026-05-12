import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';
import { UserAuth } from '../entities/user-auth.entity';
import { EmailCommunicationRoute } from '../routes/email.communication.route';
import { log } from 'console';

@Injectable()
export class OtpService {
  private readonly logger = new Logger(OtpService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly emailCommunicationRoute: EmailCommunicationRoute,
  ) {}

  private get expiryMinutes(): number {
    return this.configService.get<number>('app.otp.expiryMinutes')!;
  }

  private get maxAttempts(): number {
    return this.configService.get<number>('app.otp.maxAttempts')!;
  }

  generateOtp(): string {
    // Cryptographically secure 6-digit OTP — mirrors SecureRandom in Java
    const otp = 100000 + (crypto.randomInt(900000));
    return String(otp);
  }

  hashOtp(value: string): string {
    // SHA-256 hex — matches Java's MessageDigest + HexFormat
    return crypto.createHash('sha256').update(value, 'utf-8').digest('hex');
  }

  async sendOtp(email: string, otp: string): Promise<void> {
    this.logger.log(`Sending OTP to ${email}`);

    const subject = this.configService.get<string>('app.routes.email.otpSubject')!;
    const content = `Your OTP for login is: ${otp}. It will expire in ${this.expiryMinutes} minutes.`;

    this.logger.log(`Email route request - Email: ${email}, Subject: ${subject}, Content: ${content}`);
    const result = await this.emailCommunicationRoute.initiateRoute({ email, subject, content });

    if (result.status) {
      this.logger.log(`OTP email sent successfully to ${email}`);
    } else {
      this.logger.error(`Failed to send OTP email to ${email}: ${result.message}`);
      throw new Error(`Failed to send OTP email: ${result.message}`);
    }
  }

  validateOtp(userAuth: UserAuth, rawOtp: string): boolean {
    // Check max attempts (attempt already incremented by caller before this)
    if (userAuth.otpAttempts >= this.maxAttempts) {
      throw new Error('MAX_ATTEMPTS_EXCEEDED');
    }

    // Check expiry
    if (!userAuth.otpExpiry || new Date() > userAuth.otpExpiry) {
      throw new Error('OTP_EXPIRED');
    }

    // Hash compare
    const hashedInput = this.hashOtp(rawOtp);
    return hashedInput === userAuth.otpHash;
  }
}