import { IsString, IsNumber, IsBoolean, IsDateString, IsOptional, IsNotEmpty } from 'class-validator';

export class SfdcLoanDetailsDto {
  @IsNotEmpty() @IsString()
  loanApplicationNoLan: string;

  @IsNotEmpty() @IsString()
  clrId: string;

  @IsNotEmpty() @IsDateString()
  applicationRequestDate: string;

  @IsNotEmpty() @IsString()
  applicationChannel: string;

  @IsNotEmpty() @IsString()
  sourcingBranch: string;

  @IsNotEmpty() @IsString()
  loanBranch: string;

  @IsOptional() @IsString()
  directSalesAgent?: string;

  @IsNotEmpty() @IsString()
  productVariant: string;

  @IsOptional() @IsString()
  repaymentVariant?: string;

  @IsNotEmpty() @IsString()
  loanFacilityType: string;

  @IsNotEmpty() @IsNumber()
  requestedLoanAmountRs: number;

  @IsNotEmpty() @IsNumber()
  requestedTenorMonths: number;

  @IsNotEmpty() @IsNumber()
  noOfApplicants: number;

  @IsNotEmpty() @IsString()
  applicantCifId: string;

  @IsOptional() @IsString()
  coApplicantCifId?: string;

  @IsOptional() @IsString()
  guarantorCifId?: string;

  @IsNotEmpty() @IsString()
  loanPurpose: string;

  @IsNotEmpty() @IsBoolean()
  endUseMonitoringRequired: boolean;

  @IsNotEmpty() @IsString()
  pslCategory: string;

  @IsNotEmpty() @IsString()
  pslSubCode: string;

  @IsNotEmpty() @IsString()
  pslCategorySubCode: string;

  @IsNotEmpty() @IsString()
  interestRateType: string;

  @IsNotEmpty() @IsNumber()
  actualInterestRatePct: number;

  @IsNotEmpty() @IsString()
  paymentFrequency: string;

  @IsNotEmpty() @IsString()
  stpStatus: string;

  @IsNotEmpty() @IsString()
  coLendingRatioDisplay: string;

  @IsNotEmpty() @IsNumber()
  sanctionedAmountRs: number;

  @IsNotEmpty() @IsNumber()
  sanctionedTenorMonths: number;

  @IsNotEmpty() @IsNumber()
  totalFinanceAmountRs: number;

  @IsNotEmpty() @IsNumber()
  finalRoiPct: number;

  @IsNotEmpty() @IsNumber()
  totalFeeRs: number;

  @IsNotEmpty() @IsNumber()
  emiAmountRs: number;

  @IsNotEmpty() @IsNumber()
  firstDisbursementAmountRs: number;

  @IsNotEmpty() @IsDateString()
  loanStartDate: string;

  @IsNotEmpty() @IsDateString()
  sanctionDate: string;

  @IsNotEmpty() @IsDateString()
  sanctionExpiryDate: string;

  @IsOptional() @IsString()
  applicationStage?: string;

  @IsOptional() @IsString()
  assignedUnderwriterId?: string;

  @IsOptional() @IsString()
  assignedUnderwriterName?: string;

  @IsOptional() @IsNumber()
  underwriterTatDays?: number;

  @IsOptional() @IsBoolean()
  deviationFlag?: boolean;

  @IsOptional() @IsString()
  deviationDescription?: string;

  @IsOptional() @IsString()
  deviationApproverId?: string;

  @IsOptional() @IsString()
  deviationApproverName?: string;

  @IsOptional() @IsString()
  camId?: string;

  @IsOptional() @IsString()
  sanctionAuthorityLevel?: string;

  @IsNotEmpty() @IsString()
  sanctionedByBankUserId: string;

  @IsNotEmpty() @IsString()
  sanctionedByBankName: string;

  @IsNotEmpty() @IsDateString()
  sanctionedByBankDate: string;

  @IsNotEmpty() @IsString()
  sanctionedByNbfcUserId: string;

  @IsNotEmpty() @IsString()
  sanctionedByNbfcName: string;

  @IsNotEmpty() @IsDateString()
  sanctionedByNbfcDate: string;

  @IsNotEmpty() @IsDateString()
  customerAcceptanceTimestamp: string;

  @IsNotEmpty() @IsString()
  sanctionLetterDispatchMode: string;

  @IsNotEmpty() @IsString()
  smaClassificationAtOrigination: string;

  @IsOptional() @IsString()
  loanReferenceNumber?: string;
}
