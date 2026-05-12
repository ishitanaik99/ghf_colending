import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserAuth } from '../entities/user-auth.entity';

/**
 * Extracts the authenticated UserAuth from the request.
 * Mirrors Spring's @AuthenticationPrincipal.
 *
 * Usage:
 *   @Get('me')
 *   @UseGuards(JwtAuthGuard)
 *   getMe(@CurrentUser() user: UserAuth) { ... }
 */
export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): UserAuth => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as UserAuth;
  },
);