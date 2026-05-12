import { IsString, IsNumber, IsBoolean, IsDateString, IsOptional, IsNotEmpty } from 'class-validator';

export class SfdcDisbursementDto {
  @IsNotEmpty() @IsString()
  dirId: string;

  @IsNotEmpty() @IsString()
  loanAccountNoLan: string;

  @IsNotEmpty() @IsString()
  clrId: string;

  @IsOptional() @IsString()
  disbursementType?: string;

  @IsOptional() @IsNumber()
  trancheNumber?: number;

  @IsNotEmpty() @IsNumber()
  totalSanctionedAmountRs: number;

  @IsNotEmpty() @IsNumber()
  disbursementAmountRs: number;

  @IsNotEmpty() @IsNumber()
  bankPortionAmountRs: number;

  @IsNotEmpty() @IsNumber()
  nbfcPortionAmountRs: number;

  @IsNotEmpty() @IsString()
  beneficiaryAccountNumber: string;

  @IsNotEmpty() @IsString()
  beneficiaryIfscCode: string;

  @IsNotEmpty() @IsString()
  beneficiaryName: string;

  @IsNotEmpty() @IsString()
  paymentRail: string;

  @IsNotEmpty() @IsString()
  escrowDebitAccountNo: string;

  @IsNotEmpty() @IsString()
  utrRrnNo: string;

  @IsNotEmpty() @IsString()
  paymentStatus: string;

  @IsNotEmpty() @IsString()
  makerUserId: string;

  @IsNotEmpty() @IsDateString()
  makerTimestamp: string;

  @IsNotEmpty() @IsString()
  checkerUserId: string;

  @IsNotEmpty() @IsDateString()
  checkerTimestamp: string;

  @IsNotEmpty() @IsString()
  nbfcRemittanceStatus: string;

  @IsNotEmpty() @IsString()
  nbfcRemittanceUtr: string;

  @IsNotEmpty() @IsDateString()
  nbfcRemittanceDate: string;

  @IsNotEmpty() @IsBoolean()
  lmsAccountCreatedFlag: boolean;

  @IsNotEmpty() @IsDateString()
  firstEmiDate: string;

  @IsNotEmpty() @IsString()
  nachEcsMandateStatus: string;

  @IsNotEmpty() @IsString()
  nachUmrn: string;

  @IsNotEmpty() @IsNumber()
  processingFeeDeductedRs: number;

  @IsNotEmpty() @IsNumber()
  insuranceDeductedRs: number;

  @IsNotEmpty() @IsNumber()
  netAmountToCustomerRs: number;

  @IsOptional() @IsString()
  idempotencyKey?: string;

  @IsNotEmpty() @IsNumber()
  marginPct: number;

  @IsNotEmpty() @IsNumber()
  finalRatePct: number;

  @IsNotEmpty() @IsString()
  scheduleMethod: string;

  @IsNotEmpty() @IsString()
  interestFrequency: string;

  @IsOptional() @IsNumber()
  numberOfInstruments?: number;
}
