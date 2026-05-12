import { IsString, IsNumber, IsBoolean, IsDateString, IsOptional, IsNotEmpty } from 'class-validator';

export class SfdcIndividualApplicantDto {
  @IsNotEmpty() @IsString()
  customerIdCif: string;

  @IsNotEmpty() @IsString()
  customerType: string;

  @IsOptional() @IsString()
  salutation?: string;

  @IsNotEmpty() @IsString()
  firstName: string;

  @IsOptional() @IsString()
  middleName?: string;

  @IsNotEmpty() @IsString()
  lastName: string;

  @IsNotEmpty() @IsDateString()
  dateOfBirth: string;

  @IsNotEmpty() @IsString()
  gender: string;

  @IsNotEmpty() @IsString()
  nationality: string;

  @IsNotEmpty() @IsString()
  citizenship: string;

  @IsNotEmpty() @IsString()
  residentialStatus: string;

  @IsNotEmpty() @IsString()
  fatherFirstName: string;

  @IsOptional() @IsString()
  fatherMiddleName?: string;

  @IsNotEmpty() @IsString()
  fatherLastName: string;

  @IsNotEmpty() @IsString()
  motherFirstName: string;

  @IsOptional() @IsString()
  motherMiddleName?: string;

  @IsNotEmpty() @IsString()
  motherLastName: string;

  @IsNotEmpty() @IsString()
  maritalStatus: string;

  @IsOptional() @IsString()
  spouseFirstName?: string;

  @IsOptional() @IsString()
  spouseMiddleName?: string;

  @IsOptional() @IsString()
  spouseLastName?: string;

  @IsOptional() @IsString()
  religion?: string;

  @IsOptional() @IsString()
  casteCategory?: string;

  @IsOptional() @IsString()
  disability?: string;

  @IsOptional() @IsString()
  education?: string;

  @IsOptional() @IsString()
  qualification?: string;

  @IsNotEmpty() @IsString()
  pan: string;

  @IsNotEmpty() @IsBoolean()
  panVerifiedFlag: boolean;

  @IsNotEmpty() @IsString()
  aadhaarLast4: string;

  @IsNotEmpty() @IsBoolean()
  aadhaarVerifiedFlag: boolean;

  @IsNotEmpty() @IsString()
  ckycStatus: string;

  @IsNotEmpty() @IsString()
  mnrlCheckStatus: string;

  @IsNotEmpty() @IsBoolean()
  dedupeCheckFlag: boolean;

  @IsNotEmpty() @IsString()
  externalDedupeCheckStatus: string;

  @IsNotEmpty() @IsBoolean()
  kycCheckFlag: boolean;

  @IsNotEmpty() @IsString()
  kycVerificationMode: string;

  @IsNotEmpty() @IsBoolean()
  oglTag: boolean;

  @IsNotEmpty() @IsString()
  residenceType: string;

  @IsOptional() @IsNumber()
  residenceSinceYears?: number;

  @IsNotEmpty() @IsString()
  addressType: string;

  @IsOptional() @IsString()
  blockTaluka?: string;

  @IsNotEmpty() @IsString()
  currentAddressLine1: string;

  @IsOptional() @IsString()
  currentAddressLine2?: string;

  @IsOptional() @IsString()
  currentAddressLine3?: string;

  @IsNotEmpty() @IsString()
  currentAddressCity: string;

  @IsNotEmpty() @IsString()
  currentAddressPin: string;

  @IsNotEmpty() @IsString()
  currentAddressState: string;

  @IsOptional() @IsBoolean()
  sameAsCurrentAddress?: boolean;

  @IsNotEmpty() @IsString()
  permanentAddressLine1: string;

  @IsOptional() @IsString()
  permanentAddressLine2?: string;

  @IsOptional() @IsString()
  permanentAddressLine3?: string;

  @IsNotEmpty() @IsString()
  permanentAddressCity: string;

  @IsNotEmpty() @IsString()
  permanentAddressPin: string;

  @IsNotEmpty() @IsString()
  permanentAddressState: string;

  @IsNotEmpty() @IsString()
  addressProofType: string;

  @IsNotEmpty() @IsString()
  mobileNumber: string;

  @IsNotEmpty() @IsString()
  emailId: string;

  @IsOptional() @IsString()
  alternateEmailId?: string;

  @IsNotEmpty() @IsString()
  occupation: string;

  @IsNotEmpty() @IsString()
  occupationCategory: string;

  @IsNotEmpty() @IsNumber()
  annualIncomeRs: number;

  @IsNotEmpty() @IsString()
  employmentType: string;

  @IsNotEmpty() @IsString()
  employerName: string;

  @IsNotEmpty() @IsString()
  employerType: string;

  @IsNotEmpty() @IsString()
  employerIndustry: string;

  @IsNotEmpty() @IsString()
  designation: string;

  @IsNotEmpty() @IsString()
  profession: string;

  @IsNotEmpty() @IsString()
  employeeId: string;

  @IsNotEmpty() @IsDateString()
  employmentStartDate: string;

  @IsNotEmpty() @IsNumber()
  currentWorkExpYears: number;

  @IsNotEmpty() @IsNumber()
  currentWorkExpMonths: number;

  @IsNotEmpty() @IsNumber()
  totalWorkExpYears: number;

  @IsNotEmpty() @IsNumber()
  totalWorkExpMonths: number;

  @IsOptional() @IsString()
  workEmail?: string;

  @IsOptional() @IsBoolean()
  workEmailOtpVerified?: boolean;

  @IsNotEmpty() @IsNumber()
  monthlyIncomeRs: number;

  @IsNotEmpty() @IsString()
  incomeProofType: string;

  @IsNotEmpty() @IsString()
  bankAccountNumber: string;

  @IsNotEmpty() @IsString()
  bankIfscCode: string;

  @IsNotEmpty() @IsString()
  pennyDropStatus: string;

  @IsNotEmpty() @IsBoolean()
  pennyDropTriggeredFlag: boolean;

  @IsNotEmpty() @IsBoolean()
  bureauAboveThreshold: boolean;

  @IsNotEmpty() @IsBoolean()
  cibilTriggerFlag: boolean;

  @IsNotEmpty() @IsNumber()
  cibilScore: number;

  @IsNotEmpty() @IsDateString()
  cibilPullDate: string;

  @IsNotEmpty() @IsBoolean()
  bureauConsentFlag: boolean;

  @IsNotEmpty() @IsDateString()
  bureauConsentTimestamp: string;

  @IsNotEmpty() @IsNumber()
  foirCurrentPct: number;

  @IsNotEmpty() @IsNumber()
  foirPostEmiPct: number;

  @IsNotEmpty() @IsBoolean()
  pepFlag: boolean;

  @IsNotEmpty() @IsString()
  customerRiskCategory: string;

  @IsNotEmpty() @IsString()
  dedupStatus: string;

  @IsNotEmpty() @IsString()
  kycStatus: string;

  @IsNotEmpty() @IsDateString()
  kycExpiryDate: string;

  @IsNotEmpty() @IsString()
  negativeListCheckStatus: string;

  @IsNotEmpty() @IsDateString()
  dataConsentTimestamp: string;

  @IsNotEmpty() @IsString()
  dataConsentIpAddress: string;

  @IsNotEmpty() @IsString()
  dataConsentUserAgent: string;
}
