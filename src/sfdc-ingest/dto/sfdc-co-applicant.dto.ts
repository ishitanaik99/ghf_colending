import { IsString, IsNumber, IsBoolean, IsDateString, IsOptional, IsNotEmpty } from 'class-validator';

export class SfdcCoApplicantDto {
  @IsNotEmpty() @IsString()
  coApplicantId: string;

  @IsNotEmpty() @IsString()
  coApplicantCategory: string;

  @IsNotEmpty() @IsString()
  coApplicantType: string;

  @IsNotEmpty() @IsBoolean()
  isFinancial: boolean;

  @IsNotEmpty() @IsBoolean()
  keyApplicantFlag: boolean;

  @IsNotEmpty() @IsString()
  relationshipWithPrimary: string;

  @IsOptional() @IsString()
  salutation?: string;

  @IsNotEmpty() @IsString()
  firstName: string;

  @IsOptional() @IsString()
  middleName?: string;

  @IsNotEmpty() @IsString()
  lastName: string;

  @IsNotEmpty() @IsString()
  coApplPan: string;

  @IsOptional() @IsString()
  aadhaarLast4?: string;

  @IsNotEmpty() @IsDateString()
  dateOfBirth: string;

  @IsNotEmpty() @IsString()
  coApplGender: string;

  @IsNotEmpty() @IsString()
  coApplNationality: string;

  @IsNotEmpty() @IsString()
  coApplCitizenship: string;

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

  @IsNotEmpty() @IsString()
  mobileNumber: string;

  @IsNotEmpty() @IsString()
  primaryEmail: string;

  @IsOptional() @IsString()
  alternateEmail?: string;

  @IsNotEmpty() @IsString()
  currentAddressLine1: string;

  @IsOptional() @IsString()
  currentAddressLine2?: string;

  @IsOptional() @IsString()
  currentAddressLine3?: string;

  @IsNotEmpty() @IsString()
  coApplCity: string;

  @IsNotEmpty() @IsString()
  coApplPin: string;

  @IsNotEmpty() @IsString()
  coApplState: string;

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
  residenceType: string;

  @IsNotEmpty() @IsString()
  addressType: string;

  @IsOptional() @IsString()
  blockTaluka?: string;

  @IsOptional() @IsString()
  coApplEducation?: string;

  @IsOptional() @IsString()
  coApplQualification?: string;

  @IsOptional() @IsString()
  universityName?: string;

  @IsNotEmpty() @IsString()
  coApplOccupation: string;

  @IsNotEmpty() @IsString()
  occupationCategory: string;

  @IsOptional() @IsString()
  coApplReligion?: string;

  @IsOptional() @IsString()
  casteCategory?: string;

  @IsOptional() @IsString()
  businessIndustry?: string;

  @IsOptional() @IsString()
  businessVintage?: string;

  @IsOptional() @IsString()
  businessAddressLine1?: string;

  @IsOptional() @IsString()
  businessAddressCity?: string;

  @IsOptional() @IsString()
  businessAddressPin?: string;

  @IsOptional() @IsString()
  businessAddressState?: string;

  @IsOptional() @IsString()
  coApplGstin?: string;

  @IsOptional() @IsBoolean()
  coApplGstExemptFlag?: boolean;

  @IsOptional() @IsString()
  udyamRegistrationNo?: string;

  @IsOptional() @IsString()
  officeOwnershipType?: string;

  @IsNotEmpty() @IsBoolean()
  bureauAboveThreshold: boolean;

  @IsNotEmpty() @IsNumber()
  cibilScore: number;

  @IsNotEmpty() @IsBoolean()
  oglTag: boolean;

  @IsOptional() @IsString()
  coApplSalutation?: string;

  @IsNotEmpty() @IsBoolean()
  coApplOglTagFlag: boolean;
}
