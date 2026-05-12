import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { HttpModule } from '@nestjs/axios';

import { UserAuth } from '../entities/user-auth.entity';
import { Partners } from '../entities/partners.entity';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtTokenService } from './jwt.service';
import { OtpService } from './otp.service';
import { CookieService } from './cookie.service';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { JwtAuthGuard } from '../guards/jwt-auth/jwt-auth.guard';
import { EmailCommunicationRoute } from '../routes/email.communication.route';

@Module({
  imports: [
    // TypeORM repositories needed in this module
    TypeOrmModule.forFeature([UserAuth, Partners]),

    // Passport — 'jwt' is the default strategy
    PassportModule.register({ defaultStrategy: 'jwt' }),

    // HttpModule for EmailCommunicationRoute (mirrors Spring's RestTemplate)
    HttpModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtTokenService,
    OtpService,
    CookieService,
    JwtStrategy,
    JwtAuthGuard,
    EmailCommunicationRoute,
  ],
  exports: [
    JwtAuthGuard,   // so other modules can use @UseGuards(JwtAuthGuard)
    JwtTokenService,
    CookieService,
  ],
})
export class AuthModule {}