import {
  Controller,
  Post,
  Get,
  Body,
  Req,
  Res,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { AuthService } from './auth.service';
import { LoginRequestDto } from '../dto/auth/login-request.dto';
import { VerifyOtpRequestDto } from '../dto/auth/verify-otp-request.dto';
import { AuthResponseDto } from '../dto/auth/auth-response.dto';
import { JwtAuthGuard } from '../guards/jwt-auth/jwt-auth.guard';
import { CurrentUser } from '../decorators/current.user.decorator';
import { UserAuth } from '../entities/user-auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // POST /auth/login — public
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: LoginRequestDto): Promise<AuthResponseDto> {
    return this.authService.login(dto);
  }

  // POST /auth/verify-otp — public
  @Post('verify-otp')
  @HttpCode(HttpStatus.OK)
  verifyOtp(
    @Body() dto: VerifyOtpRequestDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AuthResponseDto> {
    return this.authService.verifyOtp(dto, res);
  }

  // POST /auth/refresh — public (cookie carries the token)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refresh(@Req() req: Request): Promise<AuthResponseDto> {
    return this.authService.refreshToken(req);
  }

  // POST /auth/logout — protected
  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async logout(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ): Promise<{ message: string }> {
    await this.authService.logout(req, res);
    return { message: 'Logged out successfully' };
  }

  // GET /auth/me — protected
  @Get('me')
  @UseGuards(JwtAuthGuard)
  getCurrentUser(@CurrentUser() user: UserAuth): Promise<Record<string, unknown>> {
    return this.authService.getCurrentUser(user.email);
  }
}