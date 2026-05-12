import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_entity_customer', schema: 'clm' })
export class ClmEntityCustomer {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'customer_id_cif', type: 'varchar', length: 20, nullable: false, unique: true })
  customerIdCif: string;

  @Column({ name: 'customer_type', type: 'varchar', length: 10, nullable: false })
  customerType: string;

  @Column({ name: 'entity_legal_name', type: 'varchar', length: 200, nullable: false })
  entityLegalName: string;

  @Column({ name: 'entity_type', type: 'varchar', length: 30, nullable: false })
  entityType: string;

  @Column({ name: 'date_of_incorporation', type: 'date', nullable: false })
  dateOfIncorporation: Date;

  @Column({ name: 'business_industry', type: 'varchar', length: 50, nullable: false })
  businessIndustry: string;

  @Column({ name: 'nature_of_business', type: 'varchar', length: 30, nullable: false })
  natureOfBusiness: string;

  @Column({ name: 'business_vintage', type: 'varchar', length: 20, nullable: false })
  businessVintage: string;

  @Column({ name: 'cin_llpin', type: 'varchar', length: 21, nullable: false })
  cinLlpin: string;

  @Column({ name: 'pan_entity', type: 'char', length: 10, nullable: false })
  panEntity: string;

  @Column({ name: 'pan_api_check_flag', type: 'boolean', nullable: false })
  panApiCheckFlag: boolean;

  @Column({ name: 'registration_number', type: 'varchar', length: 50, nullable: false })
  registrationNumber: string;

  @Column({ name: 'gst_in', type: 'varchar', length: 15, nullable: false })
  gstIn: string;

  @Column({ name: 'gst_exempt', type: 'boolean', nullable: false })
  gstExempt: boolean;

  @Column({ name: 'udyam_registration_no', type: 'varchar', length: 19, nullable: false })
  udyamRegistrationNo: string;

  @Column({ name: 'udyam_check_flag', type: 'boolean', nullable: false })
  udyamCheckFlag: boolean;

  @Column({ name: 'psl_category_entity', type: 'varchar', length: 15, nullable: false })
  pslCategoryEntity: string;

  @Column({ name: 'office_ownership_type', type: 'varchar', length: 10, nullable: false })
  officeOwnershipType: string;

  @Column({ name: 'business_address_line1', type: 'varchar', length: 100, nullable: false })
  businessAddressLine1: string;

  @Column({ name: 'business_address_line2', type: 'varchar', length: 100, nullable: true })
  businessAddressLine2: string | null;

  @Column({ name: 'business_address_line3', type: 'varchar', length: 100, nullable: true })
  businessAddressLine3: string | null;

  @Column({ name: 'business_address_city', type: 'varchar', length: 50, nullable: false })
  businessAddressCity: string;

  @Column({ name: 'business_address_pin', type: 'char', length: 6, nullable: false })
  businessAddressPin: string;

  @Column({ name: 'business_address_state', type: 'varchar', length: 50, nullable: false })
  businessAddressState: string;

  @Column({ name: 'business_address_type', type: 'varchar', length: 20, nullable: false })
  businessAddressType: string;

  @Column({ name: 'nic_business_activity_code', type: 'char', length: 5, nullable: false })
  nicBusinessActivityCode: string;

  @Column({ name: 'annual_turnover_cr', type: 'decimal', precision: 15, scale: 2, nullable: false })
  annualTurnoverCr: string;

  @Column({ name: 'shareholder_name', type: 'varchar', length: 150, nullable: true })
  shareholderName: string | null;

  @Column({ name: 'shareholder_stake_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  shareholderStakePct: string | null;

  @Column({ name: 'auth_signatory_first_name', type: 'varchar', length: 50, nullable: false })
  authSignatoryFirstName: string;

  @Column({ name: 'auth_signatory_middle_name', type: 'varchar', length: 50, nullable: true })
  authSignatoryMiddleName: string | null;

  @Column({ name: 'auth_signatory_last_name', type: 'varchar', length: 50, nullable: false })
  authSignatoryLastName: string;

  @Column({ name: 'auth_signatory_pan', type: 'char', length: 10, nullable: false })
  authSignatoryPan: string;

  @Column({ name: 'auth_signatory_aadhaar_last4', type: 'char', length: 4, nullable: false })
  authSignatoryAadhaarLast4: string;

  @Column({ name: 'director_pan', type: 'char', length: 10, nullable: false })
  directorPan: string;

  @Column({ name: 'director_din', type: 'varchar', length: 10, nullable: false })
  directorDin: string;

  @Column({ name: 'director_name', type: 'varchar', length: 150, nullable: false })
  directorName: string;

  @Column({ name: 'director_stake_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  directorStakePct: string;

  @Column({ name: 'ubo_name', type: 'varchar', length: 150, nullable: false })
  uboName: string;

  @Column({ name: 'ubo_stake_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  uboStakePct: string;

  @Column({ name: 'ubo_pan', type: 'char', length: 10, nullable: false })
  uboPan: string;

  @Column({ name: 'aml_check_flag', type: 'boolean', nullable: false })
  amlCheckFlag: boolean;

  @Column({ name: 'aml_check_status', type: 'varchar', length: 10, nullable: false })
  amlCheckStatus: string;

  @Column({ name: 'cibil_cmr_score', type: 'smallint', nullable: false })
  cibilCmrScore: number;

  @Column({ name: 'entity_bank_account_number', type: 'varchar', length: 20, nullable: false })
  entityBankAccountNumber: string;

  @Column({ name: 'entity_bank_ifsc_code', type: 'char', length: 11, nullable: false })
  entityBankIfscCode: string;

  @Column({ name: 'negative_list_aml_status', type: 'varchar', length: 10, nullable: false })
  negativeListAmlStatus: string;

  @Column({ name: 'shareholding_ratio_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  shareholdingRatioPct: string;

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
