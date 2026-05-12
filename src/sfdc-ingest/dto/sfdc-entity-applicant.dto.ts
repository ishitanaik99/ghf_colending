import { IsString, IsNumber, IsBoolean, IsDateString, IsOptional, IsNotEmpty } from 'class-validator';

export class SfdcEntityApplicantDto {
  @IsNotEmpty() @IsString()
  customerIdCif: string;

  @IsNotEmpty() @IsString()
  customerType: string;

  @IsNotEmpty() @IsString()
  entityLegalName: string;

  @IsNotEmpty() @IsString()
  entityType: string;

  @IsNotEmpty() @IsDateString()
  dateOfIncorporation: string;

  @IsNotEmpty() @IsString()
  businessIndustry: string;

  @IsNotEmpty() @IsString()
  natureOfBusiness: string;

  @IsNotEmpty() @IsString()
  businessVintage: string;

  @IsNotEmpty() @IsString()
  cinLlpin: string;

  @IsNotEmpty() @IsString()
  panEntity: string;

  @IsNotEmpty() @IsBoolean()
  panApiCheckFlag: boolean;

  @IsNotEmpty() @IsString()
  registrationNumber: string;

  @IsNotEmpty() @IsString()
  gstIn: string;

  @IsNotEmpty() @IsBoolean()
  gstExempt: boolean;

  @IsNotEmpty() @IsString()
  udyamRegistrationNo: string;

  @IsNotEmpty() @IsBoolean()
  udyamCheckFlag: boolean;

  @IsNotEmpty() @IsString()
  pslCategoryEntity: string;

  @IsNotEmpty() @IsString()
  officeOwnershipType: string;

  @IsNotEmpty() @IsString()
  businessAddressLine1: string;

  @IsOptional() @IsString()
  businessAddressLine2?: string;

  @IsOptional() @IsString()
  businessAddressLine3?: string;

  @IsNotEmpty() @IsString()
  businessAddressCity: string;

  @IsNotEmpty() @IsString()
  businessAddressPin: string;

  @IsNotEmpty() @IsString()
  businessAddressState: string;

  @IsNotEmpty() @IsString()
  businessAddressType: string;

  @IsNotEmpty() @IsString()
  nicBusinessActivityCode: string;

  @IsNotEmpty() @IsNumber()
  annualTurnoverCr: number;

  @IsOptional() @IsString()
  shareholderName?: string;

  @IsOptional() @IsNumber()
  shareholderStakePct?: number;

  @IsNotEmpty() @IsString()
  authSignatoryFirstName: string;

  @IsOptional() @IsString()
  authSignatoryMiddleName?: string;

  @IsNotEmpty() @IsString()
  authSignatoryLastName: string;

  @IsNotEmpty() @IsString()
  authSignatoryPan: string;

  @IsNotEmpty() @IsString()
  authSignatoryAadhaarLast4: string;

  @IsNotEmpty() @IsString()
  directorPan: string;

  @IsNotEmpty() @IsString()
  directorDin: string;

  @IsNotEmpty() @IsString()
  directorName: string;

  @IsNotEmpty() @IsNumber()
  directorStakePct: number;

  @IsNotEmpty() @IsString()
  uboName: string;

  @IsNotEmpty() @IsNumber()
  uboStakePct: number;

  @IsNotEmpty() @IsString()
  uboPan: string;

  @IsNotEmpty() @IsBoolean()
  amlCheckFlag: boolean;

  @IsNotEmpty() @IsString()
  amlCheckStatus: string;

  @IsNotEmpty() @IsNumber()
  cibilCmrScore: number;

  @IsNotEmpty() @IsString()
  entityBankAccountNumber: string;

  @IsNotEmpty() @IsString()
  entityBankIfscCode: string;

  @IsNotEmpty() @IsString()
  negativeListAmlStatus: string;

  @IsNotEmpty() @IsNumber()
  shareholdingRatioPct: number;
}
