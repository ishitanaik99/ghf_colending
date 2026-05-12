import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_partner', schema: 'clm' })
export class ClmPartner {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'partner_code', type: 'varchar', length: 20, nullable: false, unique: true })
  partnerCode: string;

  @Column({ name: 'partner_legal_name', type: 'varchar', length: 150, nullable: false })
  partnerLegalName: string;

  @Column({ name: 'partner_type', type: 'varchar', length: 20, nullable: false })
  partnerType: string;

  @Column({ name: 'financial_entity', type: 'varchar', length: 100, nullable: true })
  financialEntity: string | null;

  @Column({ name: 'partner_share_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  partnerSharePct: string | null;

  @Column({ name: 'company_logo_url', type: 'varchar', length: 500, nullable: true })
  companyLogoUrl: string | null;

  @Column({ name: 'domain_whitelist', type: 'varchar', length: 255, nullable: true })
  domainWhitelist: string | null;

  @Column({ name: 'rbi_registration_number', type: 'varchar', length: 50, nullable: false })
  rbiRegistrationNumber: string;

  @Column({ name: 'rbi_license_type', type: 'varchar', length: 50, nullable: false })
  rbiLicenseType: string;

  @Column({ name: 'license_validity_date', type: 'date', nullable: false })
  licenseValidityDate: Date;

  @Column({ name: 'supervisory_authority', type: 'varchar', length: 50, nullable: false })
  supervisoryAuthority: string;

  @Column({ name: 'cin_llpin', type: 'varchar', length: 21, nullable: false })
  cinLlpin: string;

  @Column({ name: 'pan_of_entity', type: 'char', length: 10, nullable: false })
  panOfEntity: string;

  @Column({ name: 'gst_registration_number', type: 'varchar', length: 15, nullable: true })
  gstRegistrationNumber: string | null;

  @Column({ name: 'reg_address_line1', type: 'varchar', length: 100, nullable: false })
  regAddressLine1: string;

  @Column({ name: 'reg_address_line2', type: 'varchar', length: 100, nullable: false })
  regAddressLine2: string;

  @Column({ name: 'reg_address_city', type: 'varchar', length: 50, nullable: false })
  regAddressCity: string;

  @Column({ name: 'reg_address_pin', type: 'char', length: 6, nullable: false })
  regAddressPin: string;

  @Column({ name: 'reg_address_state', type: 'varchar', length: 50, nullable: false })
  regAddressState: string;

  @Column({ name: 'partner_category', type: 'varchar', length: 20, nullable: false })
  partnerCategory: string;

  @Column({ name: 'net_worth_cr', type: 'decimal', precision: 12, scale: 2, nullable: false })
  netWorthCr: string;

  @Column({ name: 'crar_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  crarPct: string;

  @Column({ name: 'gross_npa_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  grossNpaPct: string;

  @Column({ name: 'net_npa_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  netNpaPct: string;

  @Column({ name: 'spoc_first_name', type: 'varchar', length: 50, nullable: false })
  spocFirstName: string;

  @Column({ name: 'spoc_middle_name', type: 'varchar', length: 50, nullable: true })
  spocMiddleName: string | null;

  @Column({ name: 'spoc_last_name', type: 'varchar', length: 50, nullable: false })
  spocLastName: string;

  @Column({ name: 'spoc_contact_type', type: 'varchar', length: 30, nullable: false })
  spocContactType: string;

  @Column({ name: 'spoc_email', type: 'varchar', length: 100, nullable: false })
  spocEmail: string;

  @Column({ name: 'spoc_mobile', type: 'char', length: 10, nullable: false })
  spocMobile: string;

  @Column({ name: 'day_appropriation_logic', type: 'varchar', length: 50, nullable: true })
  dayAppropriationLogic: string | null;

  @Column({ name: 'roi_pct', type: 'decimal', precision: 7, scale: 4, nullable: true })
  roiPct: string | null;

  @Column({ name: 'interest_rate_type', type: 'varchar', length: 10, nullable: true })
  interestRateType: string | null;

  @Column({ name: 'billing_date', type: 'smallint', nullable: true })
  billingDate: number | null;

  @Column({ name: 'amortization_rule', type: 'varchar', length: 30, nullable: true })
  amortizationRule: string | null;

  @Column({ name: 'board_resolution_date', type: 'date', nullable: false })
  boardResolutionDate: Date;

  @Column({ name: 'board_resolution_ref_no', type: 'varchar', length: 50, nullable: true })
  boardResolutionRefNo: string | null;

  @Column({ name: 'board_approved_policy_gc', type: 'boolean', nullable: true })
  boardApprovedPolicyGc: boolean | null;

  @Column({ name: 'agreement_effective_date', type: 'date', nullable: false })
  agreementEffectiveDate: Date;

  @Column({ name: 'agreement_expiry_date', type: 'date', nullable: false })
  agreementExpiryDate: Date;

  @Column({ name: 'partner_status', type: 'varchar', length: 20, nullable: true })
  partnerStatus: string | null;

  @Column({ name: 'credit_rating_agency', type: 'varchar', length: 20, nullable: true })
  creditRatingAgency: string | null;

  @Column({ name: 'credit_rating_value', type: 'varchar', length: 10, nullable: true })
  creditRatingValue: string | null;

  @Column({ name: 'stock_exchange_listing', type: 'varchar', length: 10, nullable: true })
  stockExchangeListing: string | null;

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
