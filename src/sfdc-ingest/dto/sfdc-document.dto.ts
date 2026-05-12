import { IsString, IsBoolean, IsDateString, IsOptional, IsNotEmpty } from 'class-validator';

export class SfdcDocumentDto {
  @IsNotEmpty() @IsString()
  documentId: string;

  @IsNotEmpty() @IsString()
  customerIdCif: string;

  @IsNotEmpty() @IsString()
  documentCategory: string;

  @IsNotEmpty() @IsString()
  documentSubType: string;

  @IsNotEmpty() @IsString()
  documentOwnerRole: string;

  @IsNotEmpty() @IsString()
  filePath: string;

  @IsNotEmpty() @IsString()
  fileFormat: string;

  @IsNotEmpty() @IsDateString()
  uploadTimestamp: string;

  @IsNotEmpty() @IsString()
  uploadedByUserId: string;

  @IsNotEmpty() @IsString()
  documentSource: string;

  @IsNotEmpty() @IsBoolean()
  isMandatory: boolean;

  @IsNotEmpty() @IsString()
  verificationStatus: string;

  @IsOptional() @IsString()
  verifiedByUserId?: string;

  @IsOptional() @IsDateString()
  verifiedOnDate?: string;

  @IsOptional() @IsString()
  rejectionReason?: string;

  @IsOptional() @IsDateString()
  documentValidityDate?: string;

  @IsNotEmpty() @IsString()
  panDocRef: string;

  @IsOptional() @IsString()
  passportDocRef?: string;

  @IsOptional() @IsString()
  voterIdDocRef?: string;

  @IsOptional() @IsString()
  drivingLicenseDocRef?: string;

  @IsNotEmpty() @IsString()
  incomeDocSalariedRef: string;

  @IsNotEmpty() @IsString()
  bankStatementDocRef: string;

  @IsNotEmpty() @IsString()
  incomeDocSelfEmpRef: string;

  @IsOptional() @IsString()
  approvedPlanNocRef?: string;
}
