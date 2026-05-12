import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_individual_customer', schema: 'clm' })
export class ClmIndividualCustomer {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'customer_id_cif', type: 'varchar', length: 20, nullable: false, unique: true })
  customerIdCif: string;

  @Column({ name: 'customer_type', type: 'varchar', length: 10, nullable: false })
  customerType: string;

  @Column({ name: 'salutation', type: 'varchar', length: 5, nullable: true })
  salutation: string | null;

  @Column({ name: 'first_name', type: 'varchar', length: 50, nullable: false })
  firstName: string;

  @Column({ name: 'middle_name', type: 'varchar', length: 50, nullable: true })
  middleName: string | null;

  @Column({ name: 'last_name', type: 'varchar', length: 50, nullable: false })
  lastName: string;

  @Column({ name: 'date_of_birth', type: 'date', nullable: false })
  dateOfBirth: Date;

  @Column({ name: 'gender', type: 'varchar', length: 10, nullable: false })
  gender: string;

  @Column({ name: 'nationality', type: 'varchar', length: 30, nullable: false })
  nationality: string;

  @Column({ name: 'citizenship', type: 'varchar', length: 10, nullable: false })
  citizenship: string;

  @Column({ name: 'residential_status', type: 'varchar', length: 10, nullable: false })
  residentialStatus: string;

  @Column({ name: 'father_first_name', type: 'varchar', length: 50, nullable: false })
  fatherFirstName: string;

  @Column({ name: 'father_middle_name', type: 'varchar', length: 50, nullable: true })
  fatherMiddleName: string | null;

  @Column({ name: 'father_last_name', type: 'varchar', length: 50, nullable: false })
  fatherLastName: string;

  @Column({ name: 'mother_first_name', type: 'varchar', length: 50, nullable: false })
  motherFirstName: string;

  @Column({ name: 'mother_middle_name', type: 'varchar', length: 50, nullable: true })
  motherMiddleName: string | null;

  @Column({ name: 'mother_last_name', type: 'varchar', length: 50, nullable: false })
  motherLastName: string;

  @Column({ name: 'marital_status', type: 'varchar', length: 15, nullable: false })
  maritalStatus: string;

  @Column({ name: 'spouse_first_name', type: 'varchar', length: 50, nullable: true })
  spouseFirstName: string | null;

  @Column({ name: 'spouse_middle_name', type: 'varchar', length: 50, nullable: true })
  spouseMiddleName: string | null;

  @Column({ name: 'spouse_last_name', type: 'varchar', length: 50, nullable: true })
  spouseLastName: string | null;

  @Column({ name: 'religion', type: 'varchar', length: 20, nullable: true })
  religion: string | null;

  @Column({ name: 'caste_category', type: 'varchar', length: 30, nullable: true })
  casteCategory: string | null;

  @Column({ name: 'disability', type: 'varchar', length: 30, nullable: true })
  disability: string | null;

  @Column({ name: 'education', type: 'varchar', length: 30, nullable: true })
  education: string | null;

  @Column({ name: 'qualification', type: 'varchar', length: 30, nullable: true })
  qualification: string | null;

  @Column({ name: 'pan', type: 'char', length: 10, nullable: false })
  pan: string;

  @Column({ name: 'pan_verified_flag', type: 'boolean', nullable: false })
  panVerifiedFlag: boolean;

  @Column({ name: 'aadhaar_last4', type: 'char', length: 4, nullable: false })
  aadhaarLast4: string;

  @Column({ name: 'aadhaar_verified_flag', type: 'boolean', nullable: false })
  aadhaarVerifiedFlag: boolean;

  @Column({ name: 'ckyc_status', type: 'varchar', length: 10, nullable: false })
  ckycStatus: string;

  @Column({ name: 'mnrl_check_status', type: 'varchar', length: 10, nullable: false })
  mnrlCheckStatus: string;

  @Column({ name: 'dedupe_check_flag', type: 'boolean', nullable: false })
  dedupeCheckFlag: boolean;

  @Column({ name: 'external_dedupe_check_status', type: 'varchar', length: 10, nullable: false })
  externalDedupeCheckStatus: string;

  @Column({ name: 'kyc_check_flag', type: 'boolean', nullable: false })
  kycCheckFlag: boolean;

  @Column({ name: 'kyc_verification_mode', type: 'varchar', length: 20, nullable: false })
  kycVerificationMode: string;

  @Column({ name: 'ogl_tag', type: 'boolean', nullable: false })
  oglTag: boolean;

  @Column({ name: 'residence_type', type: 'varchar', length: 15, nullable: false })
  residenceType: string;

  @Column({ name: 'residence_since_years', type: 'smallint', nullable: true })
  residenceSinceYears: number | null;

  @Column({ name: 'address_type', type: 'varchar', length: 15, nullable: false })
  addressType: string;

  @Column({ name: 'block_taluka', type: 'varchar', length: 50, nullable: true })
  blockTaluka: string | null;

  @Column({ name: 'current_address_line1', type: 'varchar', length: 100, nullable: false })
  currentAddressLine1: string;

  @Column({ name: 'current_address_line2', type: 'varchar', length: 100, nullable: true })
  currentAddressLine2: string | null;

  @Column({ name: 'current_address_line3', type: 'varchar', length: 100, nullable: true })
  currentAddressLine3: string | null;

  @Column({ name: 'current_address_city', type: 'varchar', length: 50, nullable: false })
  currentAddressCity: string;

  @Column({ name: 'current_address_pin', type: 'char', length: 6, nullable: false })
  currentAddressPin: string;

  @Column({ name: 'current_address_state', type: 'varchar', length: 50, nullable: false })
  currentAddressState: string;

  @Column({ name: 'same_as_current_address', type: 'boolean', nullable: true })
  sameAsCurrentAddress: boolean | null;

  @Column({ name: 'permanent_address_line1', type: 'varchar', length: 100, nullable: false })
  permanentAddressLine1: string;

  @Column({ name: 'permanent_address_line2', type: 'varchar', length: 100, nullable: true })
  permanentAddressLine2: string | null;

  @Column({ name: 'permanent_address_line3', type: 'varchar', length: 100, nullable: true })
  permanentAddressLine3: string | null;

  @Column({ name: 'permanent_address_city', type: 'varchar', length: 50, nullable: false })
  permanentAddressCity: string;

  @Column({ name: 'permanent_address_pin', type: 'char', length: 6, nullable: false })
  permanentAddressPin: string;

  @Column({ name: 'permanent_address_state', type: 'varchar', length: 50, nullable: false })
  permanentAddressState: string;

  @Column({ name: 'address_proof_type', type: 'varchar', length: 20, nullable: false })
  addressProofType: string;

  @Column({ name: 'mobile_number', type: 'char', length: 10, nullable: false })
  mobileNumber: string;

  @Column({ name: 'email_id', type: 'varchar', length: 100, nullable: false })
  emailId: string;

  @Column({ name: 'alternate_email_id', type: 'varchar', length: 100, nullable: true })
  alternateEmailId: string | null;

  @Column({ name: 'occupation', type: 'varchar', length: 30, nullable: false })
  occupation: string;

  @Column({ name: 'occupation_category', type: 'varchar', length: 50, nullable: false })
  occupationCategory: string;

  @Column({ name: 'annual_income_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  annualIncomeRs: string;

  @Column({ name: 'employment_type', type: 'varchar', length: 20, nullable: false })
  employmentType: string;

  @Column({ name: 'employer_name', type: 'varchar', length: 150, nullable: false })
  employerName: string;

  @Column({ name: 'employer_type', type: 'varchar', length: 50, nullable: false })
  employerType: string;

  @Column({ name: 'employer_industry', type: 'varchar', length: 50, nullable: false })
  employerIndustry: string;

  @Column({ name: 'designation', type: 'varchar', length: 50, nullable: false })
  designation: string;

  @Column({ name: 'profession', type: 'varchar', length: 50, nullable: false })
  profession: string;

  @Column({ name: 'employee_id', type: 'varchar', length: 30, nullable: false })
  employeeId: string;

  @Column({ name: 'employment_start_date', type: 'date', nullable: false })
  employmentStartDate: Date;

  @Column({ name: 'current_work_exp_years', type: 'smallint', nullable: false })
  currentWorkExpYears: number;

  @Column({ name: 'current_work_exp_months', type: 'smallint', nullable: false })
  currentWorkExpMonths: number;

  @Column({ name: 'total_work_exp_years', type: 'smallint', nullable: false })
  totalWorkExpYears: number;

  @Column({ name: 'total_work_exp_months', type: 'smallint', nullable: false })
  totalWorkExpMonths: number;

  @Column({ name: 'work_email', type: 'varchar', length: 100, nullable: true })
  workEmail: string | null;

  @Column({ name: 'work_email_otp_verified', type: 'boolean', nullable: true })
  workEmailOtpVerified: boolean | null;

  @Column({ name: 'monthly_income_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  monthlyIncomeRs: string;

  @Column({ name: 'income_proof_type', type: 'varchar', length: 20, nullable: false })
  incomeProofType: string;

  @Column({ name: 'bank_account_number', type: 'varchar', length: 20, nullable: false })
  bankAccountNumber: string;

  @Column({ name: 'bank_ifsc_code', type: 'char', length: 11, nullable: false })
  bankIfscCode: string;

  @Column({ name: 'penny_drop_status', type: 'varchar', length: 10, nullable: false })
  pennyDropStatus: string;

  @Column({ name: 'penny_drop_triggered_flag', type: 'boolean', nullable: false })
  pennyDropTriggeredFlag: boolean;

  @Column({ name: 'bureau_above_threshold', type: 'boolean', nullable: false })
  bureauAboveThreshold: boolean;

  @Column({ name: 'cibil_trigger_flag', type: 'boolean', nullable: false })
  cibilTriggerFlag: boolean;

  @Column({ name: 'cibil_score', type: 'smallint', nullable: false })
  cibilScore: number;

  @Column({ name: 'cibil_pull_date', type: 'date', nullable: false })
  cibilPullDate: Date;

  @Column({ name: 'bureau_consent_flag', type: 'boolean', nullable: false })
  bureauConsentFlag: boolean;

  @Column({ name: 'bureau_consent_timestamp', type: 'timestamptz', nullable: false })
  bureauConsentTimestamp: Date;

  @Column({ name: 'foir_current_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  foirCurrentPct: string;

  @Column({ name: 'foir_post_emi_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  foirPostEmiPct: string;

  @Column({ name: 'pep_flag', type: 'boolean', nullable: false })
  pepFlag: boolean;

  @Column({ name: 'customer_risk_category', type: 'varchar', length: 10, nullable: false })
  customerRiskCategory: string;

  @Column({ name: 'dedup_status', type: 'varchar', length: 20, nullable: false })
  dedupStatus: string;

  @Column({ name: 'kyc_status', type: 'varchar', length: 15, nullable: false })
  kycStatus: string;

  @Column({ name: 'kyc_expiry_date', type: 'date', nullable: false })
  kycExpiryDate: Date;

  @Column({ name: 'negative_list_check_status', type: 'varchar', length: 10, nullable: false })
  negativeListCheckStatus: string;

  @Column({ name: 'data_consent_timestamp', type: 'timestamptz', nullable: false })
  dataConsentTimestamp: Date;

  @Column({ name: 'data_consent_ip_address', type: 'varchar', length: 45, nullable: false })
  dataConsentIpAddress: string;

  @Column({ name: 'data_consent_user_agent', type: 'varchar', length: 255, nullable: false })
  dataConsentUserAgent: string;

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
