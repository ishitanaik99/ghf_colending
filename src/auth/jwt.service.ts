import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { UserAuth } from '../entities/user-auth.entity';

@Injectable()
export class JwtTokenService {
  private readonly logger = new Logger(JwtTokenService.name);

  constructor(private readonly configService: ConfigService) {}

  private get secret(): string {
    return this.configService.get<string>('jwt.secret')!;
  }

  private get accessTokenExpiry(): number {
    return this.configService.get<number>('jwt.accessTokenExpiry')!; // ms
  }

  private get refreshTokenExpiry(): number {
    return this.configService.get<number>('jwt.refreshTokenExpiry')!; // ms
  }

  generateAccessToken(userAuth: UserAuth): string {
    return jwt.sign(
      {
        userId: userAuth.userId,
        type: 'access',
        sub: userAuth.email,
      },
      this.secret,
      { expiresIn: Math.floor(this.accessTokenExpiry / 1000), algorithm: 'HS256' },
    );
  }

  generateRefreshToken(userAuth: UserAuth): string {
    return jwt.sign(
      {
        userId: userAuth.userId,
        type: 'refresh',
        sub: userAuth.email,
      },
      this.secret,
      { expiresIn: Math.floor(this.refreshTokenExpiry / 1000), algorithm: 'HS256' },
    );
  }

  validateToken(token: string): boolean {
    try {
      jwt.verify(token, this.secret, { algorithms: ['HS256'] });
      return true;
    } catch (e) {
      this.logger.warn(`Invalid JWT token: ${(e as Error).message}`);
      return false;
    }
  }

  extractEmail(token: string): string {
    const payload = this.extractClaims(token);
    return payload.sub as string;
  }

  extractUserId(token: string): number {
    const payload = this.extractClaims(token);
    return payload['userId'] as number;
  }

  private extractClaims(token: string): jwt.JwtPayload {
    return jwt.verify(token, this.secret, { algorithms: ['HS256'] }) as jwt.JwtPayload;
  }
}