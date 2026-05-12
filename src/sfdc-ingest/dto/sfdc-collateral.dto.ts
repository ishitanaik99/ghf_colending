import { IsString, IsNumber, IsBoolean, IsDateString, IsOptional, IsNotEmpty } from 'class-validator';

export class SfdcCollateralDto {
  @IsNotEmpty() @IsString()
  collateralId: string;

  @IsNotEmpty() @IsBoolean()
  propertyIdentified: boolean;

  @IsOptional() @IsBoolean()
  apfFlag?: boolean;

  @IsOptional() @IsString()
  propertyAddressLine1?: string;

  @IsOptional() @IsString()
  propertyAddressLine2?: string;

  @IsOptional() @IsString()
  propertyAddressLine3?: string;

  @IsOptional() @IsString()
  propertyAddressCity?: string;

  @IsOptional() @IsString()
  propertyAddressPin?: string;

  @IsOptional() @IsString()
  propertyAddressType?: string;

  @IsOptional() @IsString()
  blockTaluka?: string;

  @IsOptional() @IsString()
  projectName?: string;

  @IsOptional() @IsString()
  developerName?: string;

  @IsOptional() @IsString()
  unitPropertyType?: string;

  @IsOptional() @IsString()
  towerBuildingName?: string;

  @IsOptional() @IsString()
  floor?: string;

  @IsOptional() @IsString()
  unitNumber?: string;

  @IsOptional() @IsString()
  constructionStage?: string;

  @IsOptional() @IsString()
  ownershipType?: string;

  @IsOptional() @IsString()
  occupancyType?: string;

  @IsOptional() @IsDateString()
  occupancySinceDate?: string;

  @IsOptional() @IsString()
  propertyUsage?: string;

  @IsOptional() @IsNumber()
  estimatedValueRs?: number;

  @IsOptional() @IsNumber()
  areaOfPlotSqft?: number;

  @IsOptional() @IsNumber()
  carpetAreaSqm?: number;

  @IsOptional() @IsString()
  reraRegistrationNo?: string;

  @IsOptional() @IsBoolean()
  gplFlag?: boolean;

  @IsOptional() @IsBoolean()
  propertyInsuranceFlag?: boolean;

  @IsOptional() @IsBoolean()
  lvWaiver?: boolean;

  @IsOptional() @IsBoolean()
  flexiLoanFlag?: boolean;

  @IsOptional() @IsString()
  paymentPlanType?: string;

  @IsOptional() @IsNumber()
  ageOfPropertyYears?: number;

  @IsOptional() @IsNumber()
  noOfTenants?: number;

  @IsOptional() @IsDateString()
  occupiedSinceYear?: string;

  @IsOptional() @IsNumber()
  noOfFloors?: number;

  @IsOptional() @IsBoolean()
  collateralDedupeStatus?: boolean;

  @IsOptional() @IsNumber()
  collateralDedupeMatchScore?: number;

  @IsOptional() @IsBoolean()
  siteVisitConducted?: boolean;

  @IsOptional() @IsString()
  siteVisitProjectName?: string;

  @IsOptional() @IsString()
  siteVisitPersonMet?: string;

  // Technical Assessment fields
  @IsNotEmpty() @IsString()
  plotFlatKhasraNo: string;

  @IsNotEmpty() @IsString()
  schemeColonyBuilding: string;

  @IsNotEmpty() @IsString()
  district: string;

  @IsOptional() @IsString()
  village?: string;

  @IsOptional() @IsString()
  tehsil?: string;

  @IsNotEmpty() @IsString()
  techTownCity: string;

  @IsNotEmpty() @IsString()
  techState: string;

  @IsNotEmpty() @IsString()
  propertyAreaTech: string;

  @IsNotEmpty() @IsString()
  northBoundary: string;

  @IsNotEmpty() @IsString()
  southBoundary: string;

  @IsNotEmpty() @IsString()
  eastBoundary: string;

  @IsNotEmpty() @IsString()
  westBoundary: string;

  @IsNotEmpty() @IsString()
  valuationReportType: string;

  @IsNotEmpty() @IsDateString()
  valuationUploadDate: string;

  @IsNotEmpty() @IsString()
  valuationAgency: string;

  @IsNotEmpty() @IsNumber()
  marketValueRs: number;

  @IsOptional() @IsString()
  propertyDescriptionUsage?: string;

  @IsNotEmpty() @IsString()
  techValuationReportUrl: string;

  // Legal Assessment fields
  @IsNotEmpty() @IsString()
  legalOpinion: string;

  @IsNotEmpty() @IsBoolean()
  titleClearFlag: boolean;

  @IsNotEmpty() @IsString()
  legalReportUrl: string;

  @IsNotEmpty() @IsString()
  encumbranceCertificateDetails: string;

  @IsNotEmpty() @IsString()
  cersaiApplicationNo: string;

  @IsNotEmpty() @IsDateString()
  cersaiRegistrationDate: string;
}
