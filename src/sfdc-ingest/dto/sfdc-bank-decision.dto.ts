import { IsString, IsNumber, IsBoolean, IsDateString, IsOptional, IsNotEmpty } from 'class-validator';

export class SfdcBankDecisionDto {
  @IsNotEmpty() @IsString()
  bankDecisionId: string;

  @IsNotEmpty() @IsString()
  clrId: string;

  @IsNotEmpty() @IsString()
  bankDecision: string;

  @IsNotEmpty() @IsString()
  bankDecisionStatus: string;

  @IsNotEmpty() @IsString()
  bankRemarks: string;

  @IsNotEmpty() @IsNumber()
  bankSanctionedAmountRs: number;

  @IsNotEmpty() @IsNumber()
  bankInterestRatePct: number;

  @IsOptional() @IsNumber()
  approvedLtvPct?: number;

  @IsOptional() @IsString()
  rejectReasonCode?: string;

  @IsOptional() @IsString()
  referBackQuery?: string;

  @IsNotEmpty() @IsString()
  bankOfficerUserId: string;

  @IsNotEmpty() @IsString()
  bankOfficerName: string;

  @IsNotEmpty() @IsDateString()
  bankDecisionTimestamp: string;

  @IsNotEmpty() @IsString()
  bankSanctionReferenceNo: string;

  @IsNotEmpty() @IsBoolean()
  dualSanctionCompletionFlag: boolean;
}
