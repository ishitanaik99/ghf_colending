import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_document', schema: 'clm' })
export class ClmDocument {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'document_id', type: 'varchar', length: 20, nullable: false, unique: true })
  documentId: string;

  @Column({ name: 'loan_application_no_lan', type: 'varchar', length: 25, nullable: false })
  loanApplicationNoLan: string;

  @Column({ name: 'customer_id_cif', type: 'varchar', length: 20, nullable: false })
  customerIdCif: string;

  @Column({ name: 'document_category', type: 'varchar', length: 20, nullable: false })
  documentCategory: string;

  @Column({ name: 'document_sub_type', type: 'varchar', length: 50, nullable: false })
  documentSubType: string;

  @Column({ name: 'document_owner_role', type: 'varchar', length: 15, nullable: false })
  documentOwnerRole: string;

  @Column({ name: 'file_path', type: 'varchar', length: 500, nullable: false })
  filePath: string;

  @Column({ name: 'file_format', type: 'varchar', length: 10, nullable: false })
  fileFormat: string;

  @Column({ name: 'upload_timestamp', type: 'timestamptz', nullable: false })
  uploadTimestamp: Date;

  @Column({ name: 'uploaded_by_user_id', type: 'varchar', length: 50, nullable: false })
  uploadedByUserId: string;

  @Column({ name: 'document_source', type: 'varchar', length: 10, nullable: false })
  documentSource: string;

  @Column({ name: 'is_mandatory', type: 'boolean', nullable: false })
  isMandatory: boolean;

  @Column({ name: 'verification_status', type: 'varchar', length: 15, nullable: false })
  verificationStatus: string;

  @Column({ name: 'verified_by_user_id', type: 'varchar', length: 50, nullable: true })
  verifiedByUserId: string | null;

  @Column({ name: 'verified_on_date', type: 'date', nullable: true })
  verifiedOnDate: Date | null;

  @Column({ name: 'rejection_reason', type: 'varchar', length: 300, nullable: true })
  rejectionReason: string | null;

  @Column({ name: 'document_validity_date', type: 'date', nullable: true })
  documentValidityDate: Date | null;

  @Column({ name: 'pan_doc_ref', type: 'varchar', length: 500, nullable: false })
  panDocRef: string;

  @Column({ name: 'passport_doc_ref', type: 'varchar', length: 500, nullable: true })
  passportDocRef: string | null;

  @Column({ name: 'voter_id_doc_ref', type: 'varchar', length: 500, nullable: true })
  voterIdDocRef: string | null;

  @Column({ name: 'driving_license_doc_ref', type: 'varchar', length: 500, nullable: true })
  drivingLicenseDocRef: string | null;

  @Column({ name: 'income_doc_salaried_ref', type: 'varchar', length: 500, nullable: false })
  incomeDocSalariedRef: string;

  @Column({ name: 'bank_statement_doc_ref', type: 'varchar', length: 500, nullable: false })
  bankStatementDocRef: string;

  @Column({ name: 'income_doc_self_emp_ref', type: 'varchar', length: 500, nullable: false })
  incomeDocSelfEmpRef: string;

  @Column({ name: 'approved_plan_noc_ref', type: 'varchar', length: 500, nullable: true })
  approvedPlanNocRef: string | null;

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
