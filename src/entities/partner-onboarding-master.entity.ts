import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

// ─── Enums ────────────────────────────────────────────────────────────────────

export enum PartnerTypeEnum {
  BANK = 'BANK',
  NBFC = 'NBFC',
  HFC = 'HFC',
}

export enum SupervisoryAuthorityEnum {
  RBI = 'RBI',
  NHB = 'NHB',
  SEBI = 'SEBI',
  IRDAI = 'IRDAI',
}

export enum PartnerCategoryEnum {
  PRIORITY = 'PRIORITY',
  STANDARD = 'STANDARD',
}

export enum PartnerStatusEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
}

export enum StockExchangeListingEnum {
  BSE = 'BSE',
  NSE = 'NSE',
  BOTH = 'BOTH',
  NONE = 'NONE',
}

// ─── Entity ───────────────────────────────────────────────────────────────────

@Entity({ name: 'partner_onboarding_master', schema: 'ghf_colending' })
export class PartnerOnboardingMaster {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: number;

  @Column({ name: 'partner_legal_name', type: 'varchar', length: 150, nullable: false })
  partnerLegalName: string;

  @Column({ name: 'partner_code', type: 'varchar', length: 20, nullable: false, unique: true })
  partnerCode: string;

  @Column({ name: 'partner_type', type: 'varchar', nullable: false })
  partnerType: PartnerTypeEnum;

  @Column({ name: 'rbi_registration_number', type: 'varchar', length: 50, nullable: false })
  rbiRegistrationNumber: string;

  @Column({ name: 'rbi_license_type', type: 'varchar', length: 100, nullable: false })
  rbiLicenseType: string;

  @Column({ name: 'license_validity_date', type: 'date', nullable: false })
  licenseValidityDate: Date;

  @Column({ name: 'supervisory_authority', type: 'varchar', nullable: false })
  supervisoryAuthority: SupervisoryAuthorityEnum;

  @Column({ name: 'cin_llpin', type: 'varchar', length: 21, nullable: false })
  cinLlpin: string;

  @Column({ name: 'pan_of_entity', type: 'varchar', length: 10, nullable: false })
  panOfEntity: string;

  @Column({ name: 'gst_registration_number', type: 'varchar', length: 15, nullable: true })
  gstRegistrationNumber: string | null;

  @Column({ name: 'registered_address_line1', type: 'varchar', length: 255, nullable: false })
  registeredAddressLine1: string;

  @Column({ name: 'registered_address_line2', type: 'varchar', length: 255, nullable: true })
  registeredAddressLine2: string | null;

  @Column({ name: 'registered_address_line3', type: 'varchar', length: 255, nullable: true })
  registeredAddressLine3: string | null;

  @Column({ name: 'registered_city', type: 'varchar', length: 100, nullable: false })
  registeredCity: string;

  @Column({ name: 'registered_pin_code', type: 'varchar', length: 10, nullable: false })
  registeredPinCode: string;

  @Column({ name: 'registered_state', type: 'varchar', length: 100, nullable: false })
  registeredState: string;

  @Column({ name: 'partner_category', type: 'varchar', nullable: false })
  partnerCategory: PartnerCategoryEnum;

  @Column({ name: 'net_worth_rs_cr', type: 'decimal', precision: 12, scale: 2, nullable: false })
  netWorthRsCr: string;

  @Column({ name: 'crar_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  crarPct: string;

  @Column({ name: 'gross_npa_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  grossNpaPct: string;

  @Column({ name: 'net_npa_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  netNpaPct: string;

  @Column({ name: 'nodal_officer_name', type: 'varchar', length: 150, nullable: false })
  nodalOfficerName: string;

  @Column({ name: 'nodal_officer_email', type: 'varchar', length: 254, nullable: false })
  nodalOfficerEmail: string;

  @Column({ name: 'nodal_officer_mobile', type: 'varchar', length: 15, nullable: false })
  nodalOfficerMobile: string;

  @Column({ name: 'board_resolution_date', type: 'date', nullable: false })
  boardResolutionDate: Date;

  @Column({ name: 'board_resolution_reference_no', type: 'varchar', length: 50, nullable: true })
  boardResolutionReferenceNo: string | null;

  @Column({ name: 'board_approved_policy_gc', type: 'boolean', nullable: false, default: false })
  boardApprovedPolicyGc: boolean;

  @Column({ name: 'agreement_effective_date', type: 'date', nullable: false })
  agreementEffectiveDate: Date;

  @Column({ name: 'agreement_expiry_date', type: 'date', nullable: false })
  agreementExpiryDate: Date;

  @Column({ name: 'partner_status', type: 'varchar', nullable: false, default: PartnerStatusEnum.ACTIVE })
  partnerStatus: PartnerStatusEnum;

  @Column({ name: 'credit_rating', type: 'varchar', length: 50, nullable: true })
  creditRating: string | null;

  @Column({ name: 'stock_exchange_listing', type: 'varchar', nullable: true })
  stockExchangeListing: StockExchangeListingEnum | null;

  @Column({ name: 'created_at', type: 'timestamp', nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp', nullable: false })
  updatedAt: Date;

  @BeforeInsert()
  setCreatedAt() {
    const now = new Date();
    this.createdAt = now;
    this.updatedAt = now;
  }

  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = new Date();
  }
}