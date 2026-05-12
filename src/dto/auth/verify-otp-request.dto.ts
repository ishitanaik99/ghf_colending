import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class VerifyOtpRequestDto {
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'OTP is required' })
  @IsString()
  otp: string;
}