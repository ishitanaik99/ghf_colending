import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { SfdcLoanDetailsDto } from './sfdc-loan-details.dto';
import { SfdcIndividualApplicantDto } from './sfdc-individual-applicant.dto';
import { SfdcCoApplicantDto } from './sfdc-co-applicant.dto';
import { SfdcEntityApplicantDto } from './sfdc-entity-applicant.dto';
import { SfdcCollateralDto } from './sfdc-collateral.dto';
import { SfdcDisbursementDto } from './sfdc-disbursement.dto';
import { SfdcDocumentDto } from './sfdc-document.dto';

export class SfdcRecordDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => SfdcLoanDetailsDto)
  loanDetails: SfdcLoanDetailsDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => SfdcIndividualApplicantDto)
  individualApplicant: SfdcIndividualApplicantDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SfdcCoApplicantDto)
  coApplicants?: SfdcCoApplicantDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => SfdcEntityApplicantDto)
  entityApplicant?: SfdcEntityApplicantDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => SfdcCollateralDto)
  collateral?: SfdcCollateralDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => SfdcDisbursementDto)
  disbursement?: SfdcDisbursementDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SfdcDocumentDto)
  documents?: SfdcDocumentDto[];
}

export class SfdcIngestRequestDto {
  @IsOptional()
  @IsString()
  partnerCode?: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SfdcRecordDto)
  records: SfdcRecordDto[];
}
