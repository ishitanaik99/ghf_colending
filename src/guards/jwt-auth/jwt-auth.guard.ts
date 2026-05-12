import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Drop this guard on any controller or route that needs authentication.
 * Mirrors Spring's .anyRequest().authenticated() in SecurityConfig.
 *
 * Usage:
 *   @UseGuards(JwtAuthGuard)
 *   @Get('protected-route')
 *   someMethod(@CurrentUser() user: UserAuth) { ... }
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}