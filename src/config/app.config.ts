import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: parseInt(process.env.PORT ?? '4113', 10),

  otp: {
    expiryMinutes: parseInt(process.env.OTP_EXPIRY_MINUTES ?? '5', 10),
    maxAttempts: parseInt(process.env.OTP_MAX_ATTEMPTS ?? '5', 10),
  },

  routes: {
    email: {
      otpUrl: process.env.EMAIL_OTP_URL,
      otpSubject: process.env.EMAIL_OTP_SUBJECT,
    },
    sms: {
      otpUrl: process.env.SMS_OTP_URL,
      otpMessage: process.env.SMS_OTP_MESSAGE,
    },
  },
}));