import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_collateral', schema: 'clm' })
export class ClmCollateral {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'collateral_id', type: 'varchar', length: 20, nullable: false, unique: true })
  collateralId: string;

  @Column({ name: 'loan_application_no_lan', type: 'varchar', length: 25, nullable: false })
  loanApplicationNoLan: string;

  @Column({ name: 'property_identified', type: 'boolean', nullable: false })
  propertyIdentified: boolean;

  @Column({ name: 'apf_flag', type: 'boolean', nullable: true })
  apfFlag: boolean | null;

  @Column({ name: 'property_address_line1', type: 'varchar', length: 100, nullable: true })
  propertyAddressLine1: string | null;

  @Column({ name: 'property_address_line2', type: 'varchar', length: 100, nullable: true })
  propertyAddressLine2: string | null;

  @Column({ name: 'property_address_line3', type: 'varchar', length: 100, nullable: true })
  propertyAddressLine3: string | null;

  @Column({ name: 'property_address_city', type: 'varchar', length: 50, nullable: true })
  propertyAddressCity: string | null;

  @Column({ name: 'property_address_pin', type: 'char', length: 6, nullable: true })
  propertyAddressPin: string | null;

  @Column({ name: 'property_address_type', type: 'varchar', length: 15, nullable: true })
  propertyAddressType: string | null;

  @Column({ name: 'block_taluka', type: 'varchar', length: 50, nullable: true })
  blockTaluka: string | null;

  @Column({ name: 'project_name', type: 'varchar', length: 150, nullable: true })
  projectName: string | null;

  @Column({ name: 'developer_name', type: 'varchar', length: 150, nullable: true })
  developerName: string | null;

  @Column({ name: 'unit_property_type', type: 'varchar', length: 40, nullable: true })
  unitPropertyType: string | null;

  @Column({ name: 'tower_building_name', type: 'varchar', length: 100, nullable: true })
  towerBuildingName: string | null;

  @Column({ name: 'floor', type: 'varchar', length: 10, nullable: true })
  floor: string | null;

  @Column({ name: 'unit_number', type: 'varchar', length: 20, nullable: true })
  unitNumber: string | null;

  @Column({ name: 'construction_stage', type: 'varchar', length: 25, nullable: true })
  constructionStage: string | null;

  @Column({ name: 'ownership_type', type: 'varchar', length: 30, nullable: true })
  ownershipType: string | null;

  @Column({ name: 'occupancy_type', type: 'varchar', length: 30, nullable: true })
  occupancyType: string | null;

  @Column({ name: 'occupancy_since_date', type: 'date', nullable: true })
  occupancySinceDate: Date | null;

  @Column({ name: 'property_usage', type: 'varchar', length: 30, nullable: true })
  propertyUsage: string | null;

  @Column({ name: 'estimated_value_rs', type: 'decimal', precision: 12, scale: 2, nullable: true })
  estimatedValueRs: string | null;

  @Column({ name: 'area_of_plot_sqft', type: 'decimal', precision: 10, scale: 2, nullable: true })
  areaOfPlotSqft: string | null;

  @Column({ name: 'carpet_area_sqm', type: 'decimal', precision: 10, scale: 2, nullable: true })
  carpetAreaSqm: string | null;

  @Column({ name: 'rera_registration_no', type: 'varchar', length: 25, nullable: true })
  reraRegistrationNo: string | null;

  @Column({ name: 'gpl_flag', type: 'boolean', nullable: true })
  gplFlag: boolean | null;

  @Column({ name: 'property_insurance_flag', type: 'boolean', nullable: true })
  propertyInsuranceFlag: boolean | null;

  @Column({ name: 'lv_waiver', type: 'boolean', nullable: true })
  lvWaiver: boolean | null;

  @Column({ name: 'flexi_loan_flag', type: 'boolean', nullable: true })
  flexiLoanFlag: boolean | null;

  @Column({ name: 'payment_plan_type', type: 'varchar', length: 30, nullable: true })
  paymentPlanType: string | null;

  @Column({ name: 'age_of_property_years', type: 'smallint', nullable: true })
  ageOfPropertyYears: number | null;

  @Column({ name: 'no_of_tenants', type: 'smallint', nullable: true })
  noOfTenants: number | null;

  @Column({ name: 'occupied_since_year', type: 'date', nullable: true })
  occupiedSinceYear: Date | null;

  @Column({ name: 'no_of_floors', type: 'smallint', nullable: true })
  noOfFloors: number | null;

  @Column({ name: 'collateral_dedupe_status', type: 'boolean', nullable: true })
  collateralDedupeStatus: boolean | null;

  @Column({ name: 'collateral_dedupe_match_score', type: 'decimal', precision: 5, scale: 2, nullable: true })
  collateralDedupeMatchScore: string | null;

  @Column({ name: 'site_visit_conducted', type: 'boolean', nullable: true })
  siteVisitConducted: boolean | null;

  @Column({ name: 'site_visit_project_name', type: 'varchar', length: 150, nullable: true })
  siteVisitProjectName: string | null;

  @Column({ name: 'site_visit_person_met', type: 'varchar', length: 100, nullable: true })
  siteVisitPersonMet: string | null;

  @Column({ name: 'plot_flat_khasra_no', type: 'varchar', length: 50, nullable: false })
  plotFlatKhasraNo: string;

  @Column({ name: 'scheme_colony_building', type: 'varchar', length: 200, nullable: false })
  schemeColonyBuilding: string;

  @Column({ name: 'district', type: 'varchar', length: 50, nullable: false })
  district: string;

  @Column({ name: 'village', type: 'varchar', length: 50, nullable: true })
  village: string | null;

  @Column({ name: 'tehsil', type: 'varchar', length: 50, nullable: true })
  tehsil: string | null;

  @Column({ name: 'tech_town_city', type: 'varchar', length: 50, nullable: false })
  techTownCity: string;

  @Column({ name: 'tech_state', type: 'varchar', length: 50, nullable: false })
  techState: string;

  @Column({ name: 'property_area_tech', type: 'varchar', length: 50, nullable: false })
  propertyAreaTech: string;

  @Column({ name: 'north_boundary', type: 'varchar', length: 100, nullable: false })
  northBoundary: string;

  @Column({ name: 'south_boundary', type: 'varchar', length: 100, nullable: false })
  southBoundary: string;

  @Column({ name: 'east_boundary', type: 'varchar', length: 100, nullable: false })
  eastBoundary: string;

  @Column({ name: 'west_boundary', type: 'varchar', length: 100, nullable: false })
  westBoundary: string;

  @Column({ name: 'valuation_report_type', type: 'varchar', length: 30, nullable: false })
  valuationReportType: string;

  @Column({ name: 'valuation_upload_date', type: 'date', nullable: false })
  valuationUploadDate: Date;

  @Column({ name: 'valuation_agency', type: 'varchar', length: 100, nullable: false })
  valuationAgency: string;

  @Column({ name: 'market_value_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  marketValueRs: string;

  @Column({ name: 'property_description_usage', type: 'varchar', length: 50, nullable: true })
  propertyDescriptionUsage: string | null;

  @Column({ name: 'tech_valuation_report_url', type: 'varchar', length: 500, nullable: false })
  techValuationReportUrl: string;

  @Column({ name: 'legal_opinion', type: 'varchar', length: 15, nullable: false })
  legalOpinion: string;

  @Column({ name: 'title_clear_flag', type: 'boolean', nullable: false })
  titleClearFlag: boolean;

  @Column({ name: 'legal_report_url', type: 'varchar', length: 500, nullable: false })
  legalReportUrl: string;

  @Column({ name: 'encumbrance_certificate_details', type: 'varchar', length: 500, nullable: false })
  encumbranceCertificateDetails: string;

  @Column({ name: 'cersai_application_no', type: 'varchar', length: 50, nullable: false })
  cersaiApplicationNo: string;

  @Column({ name: 'cersai_registration_date', type: 'date', nullable: false })
  cersaiRegistrationDate: Date;

  @Column({ name: 'created_at', type: 'timestamptz', nullable: false, default: () => 'now()' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamptz', nullable: false, default: () => 'now()' })
  updatedAt: Date;

  @Column({ name: 'created_by', type: 'varchar', length: 50, nullable: true })
  createdBy: string | null;

  @Column({ name: 'updated_by', type: 'varchar', length: 50, nullable: true })
  updatedBy: string | null;

  @Column({ name: 'is_deleted', type: 'boolean', nullable: false, default: false })
  isDeleted: boolean;
}
