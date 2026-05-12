import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET,
  accessTokenExpiry: parseInt(process.env.JWT_ACCESS_EXPIRY ?? '900000', 10),   // ms → 15 min
  refreshTokenExpiry: parseInt(process.env.JWT_REFRESH_EXPIRY ?? '604800000', 10), // ms → 7 days
}));