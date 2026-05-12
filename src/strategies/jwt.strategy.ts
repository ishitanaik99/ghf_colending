import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAuth } from '../entities/user-auth.entity';

export interface JwtPayload {
  sub: string;   // email
  userId: number;
  type: string;
}

/**
 * Mirrors Spring's JwtAuthFilter + CustomUserDetailsService combined.
 * Passport calls validate() after signature + expiry checks pass.
 * The returned value is attached to req.user.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    configService: ConfigService,
    @InjectRepository(UserAuth)
    private readonly userAuthRepository: Repository<UserAuth>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt.secret')!,
      algorithms: ['HS256'],
    });
  }

  async validate(payload: JwtPayload): Promise<UserAuth> {
    // Only accept access tokens through this guard
    if (payload.type !== 'access') {
      throw new UnauthorizedException('Invalid token type');
    }

    const userAuth = await this.userAuthRepository.findOne({
      where: { email: payload.sub },
      relations: ['partner'],
    });

    if (!userAuth || !userAuth.isActive) {
      throw new UnauthorizedException('User not found or inactive');
    }

    return userAuth; // becomes req.user
  }
}