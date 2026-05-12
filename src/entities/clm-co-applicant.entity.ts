import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_co_applicant', schema: 'clm' })
export class ClmCoApplicant {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'co_applicant_id', type: 'varchar', length: 20, nullable: false, unique: true })
  coApplicantId: string;

  @Column({ name: 'loan_application_no_lan', type: 'varchar', length: 25, nullable: false })
  loanApplicationNoLan: string;

  @Column({ name: 'co_applicant_category', type: 'varchar', length: 25, nullable: false })
  coApplicantCategory: string;

  @Column({ name: 'co_applicant_type', type: 'varchar', length: 20, nullable: false })
  coApplicantType: string;

  @Column({ name: 'is_financial', type: 'boolean', nullable: false })
  isFinancial: boolean;

  @Column({ name: 'key_applicant_flag', type: 'boolean', nullable: false })
  keyApplicantFlag: boolean;

  @Column({ name: 'relationship_with_primary', type: 'varchar', length: 20, nullable: false })
  relationshipWithPrimary: string;

  @Column({ name: 'salutation', type: 'varchar', length: 5, nullable: true })
  salutation: string | null;

  @Column({ name: 'first_name', type: 'varchar', length: 50, nullable: false })
  firstName: string;

  @Column({ name: 'middle_name', type: 'varchar', length: 50, nullable: true })
  middleName: string | null;

  @Column({ name: 'last_name', type: 'varchar', length: 50, nullable: false })
  lastName: string;

  @Column({ name: 'pan', type: 'char', length: 10, nullable: true })
  pan: string | null;

  @Column({ name: 'aadhaar_last4', type: 'char', length: 4, nullable: true })
  aadhaarLast4: string | null;

  @Column({ name: 'date_of_birth', type: 'date', nullable: false })
  dateOfBirth: Date;

  @Column({ name: 'gender', type: 'varchar', length: 10, nullable: false })
  gender: string;

  @Column({ name: 'nationality', type: 'varchar', length: 30, nullable: false })
  nationality: string;

  @Column({ name: 'citizenship', type: 'varchar', length: 10, nullable: false })
  citizenship: string;

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

  @Column({ name: 'mobile_number', type: 'char', length: 10, nullable: false })
  mobileNumber: string;

  @Column({ name: 'primary_email', type: 'varchar', length: 100, nullable: false })
  primaryEmail: string;

  @Column({ name: 'alternate_email', type: 'varchar', length: 100, nullable: true })
  alternateEmail: string | null;

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

  @Column({ name: 'residence_type', type: 'varchar', length: 10, nullable: false })
  residenceType: string;

  @Column({ name: 'address_type', type: 'varchar', length: 15, nullable: false })
  addressType: string;

  @Column({ name: 'block_taluka', type: 'varchar', length: 50, nullable: true })
  blockTaluka: string | null;

  @Column({ name: 'education', type: 'varchar', length: 30, nullable: true })
  education: string | null;

  @Column({ name: 'qualification', type: 'varchar', length: 30, nullable: true })
  qualification: string | null;

  @Column({ name: 'university_name', type: 'varchar', length: 100, nullable: true })
  universityName: string | null;

  @Column({ name: 'occupation', type: 'varchar', length: 30, nullable: false })
  occupation: string;

  @Column({ name: 'occupation_category', type: 'varchar', length: 50, nullable: false })
  occupationCategory: string;

  @Column({ name: 'religion', type: 'varchar', length: 20, nullable: true })
  religion: string | null;

  @Column({ name: 'caste_category', type: 'varchar', length: 30, nullable: true })
  casteCategory: string | null;

  @Column({ name: 'business_industry', type: 'varchar', length: 50, nullable: true })
  businessIndustry: string | null;

  @Column({ name: 'business_vintage', type: 'varchar', length: 20, nullable: true })
  businessVintage: string | null;

  @Column({ name: 'business_address_line1', type: 'varchar', length: 100, nullable: true })
  businessAddressLine1: string | null;

  @Column({ name: 'business_address_city', type: 'varchar', length: 50, nullable: true })
  businessAddressCity: string | null;

  @Column({ name: 'business_address_pin', type: 'char', length: 6, nullable: true })
  businessAddressPin: string | null;

  @Column({ name: 'business_address_state', type: 'varchar', length: 50, nullable: true })
  businessAddressState: string | null;

  @Column({ name: 'gstin', type: 'varchar', length: 15, nullable: true })
  gstin: string | null;

  @Column({ name: 'gst_exempt', type: 'boolean', nullable: true })
  gstExempt: boolean | null;

  @Column({ name: 'udyam_registration_no', type: 'varchar', length: 19, nullable: true })
  udyamRegistrationNo: string | null;

  @Column({ name: 'office_ownership_type', type: 'varchar', length: 10, nullable: true })
  officeOwnershipType: string | null;

  @Column({ name: 'bureau_above_threshold', type: 'boolean', nullable: false })
  bureauAboveThreshold: boolean;

  @Column({ name: 'cibil_score', type: 'smallint', nullable: false })
  cibilScore: number;

  @Column({ name: 'ogl_tag', type: 'boolean', nullable: false })
  oglTag: boolean;

  @Column({ name: 'co_appl_pan', type: 'char', length: 10, nullable: false })
  coApplPan: string;

  @Column({ name: 'co_appl_salutation', type: 'varchar', length: 10, nullable: true })
  coApplSalutation: string | null;

  @Column({ name: 'co_appl_pin', type: 'char', length: 6, nullable: false })
  coApplPin: string;

  @Column({ name: 'co_appl_state', type: 'varchar', length: 50, nullable: false })
  coApplState: string;

  @Column({ name: 'co_appl_city', type: 'varchar', length: 50, nullable: false })
  coApplCity: string;

  @Column({ name: 'co_appl_gender', type: 'varchar', length: 10, nullable: false })
  coApplGender: string;

  @Column({ name: 'co_appl_nationality', type: 'varchar', length: 30, nullable: false })
  coApplNationality: string;

  @Column({ name: 'co_appl_citizenship', type: 'varchar', length: 30, nullable: false })
  coApplCitizenship: string;

  @Column({ name: 'co_appl_education', type: 'varchar', length: 50, nullable: true })
  coApplEducation: string | null;

  @Column({ name: 'co_appl_qualification', type: 'varchar', length: 100, nullable: true })
  coApplQualification: string | null;

  @Column({ name: 'co_appl_occupation', type: 'varchar', length: 50, nullable: false })
  coApplOccupation: string;

  @Column({ name: 'co_appl_gstin', type: 'varchar', length: 15, nullable: true })
  coApplGstin: string | null;

  @Column({ name: 'co_appl_gst_exempt_flag', type: 'boolean', nullable: true })
  coApplGstExemptFlag: boolean | null;

  @Column({ name: 'co_appl_ogl_tag_flag', type: 'boolean', nullable: false })
  coApplOglTagFlag: boolean;

  @Column({ name: 'co_appl_religion', type: 'varchar', length: 30, nullable: true })
  coApplReligion: string | null;

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
