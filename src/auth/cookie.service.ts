import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';

const REFRESH_TOKEN_COOKIE = 'refreshToken';

@Injectable()
export class CookieService {
  constructor(private readonly configService: ConfigService) {}

  private get refreshTokenExpiryMs(): number {
    return this.configService.get<number>('jwt.refreshTokenExpiry')!;
  }

  setRefreshTokenCookie(res: Response, token: string): void {
    res.cookie(REFRESH_TOKEN_COOKIE, token, {
      httpOnly: true,
      secure: true,                  // false for local dev without HTTPS
      path: '/auth/refresh',         // cookie is only sent to refresh endpoint
      maxAge: this.refreshTokenExpiryMs, // express uses ms; matches Spring's ms / 1000 * 1000
      sameSite: 'strict',
    });
  }

  clearRefreshTokenCookie(res: Response): void {
    res.cookie(REFRESH_TOKEN_COOKIE, '', {
      httpOnly: true,
      secure: true,
      path: '/auth/refresh',
      maxAge: 0,
    });
  }

  extractRefreshToken(req: Request): string | null {
    return (req.cookies as Record<string, string>)?.[REFRESH_TOKEN_COOKIE] ?? null;
  }
}