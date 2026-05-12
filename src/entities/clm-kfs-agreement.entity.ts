import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_kfs_agreement', schema: 'clm' })
export class ClmKfsAgreement {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'kfs_document_id', type: 'varchar', length: 20, nullable: false, unique: true })
  kfsDocumentId: string;

  @Column({ name: 'annual_percentage_rate_pct', type: 'decimal', precision: 7, scale: 4, nullable: false })
  annualPercentageRatePct: string;

  @Column({ name: 'fee_name', type: 'varchar', length: 100, nullable: false })
  feeName: string;

  @Column({ name: 'fee_amount_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  feeAmountRs: string;

  @Column({ name: 'fee_timing', type: 'varchar', length: 50, nullable: false })
  feeTiming: string;

  @Column({ name: 'cooling_off_period_days', type: 'smallint', nullable: false })
  coolingOffPeriodDays: number;

  @Column({ name: 'recovery_agent_name', type: 'varchar', length: 150, nullable: false })
  recoveryAgentName: string;

  @Column({ name: 'recovery_agent_contact', type: 'char', length: 10, nullable: false })
  recoveryAgentContact: string;

  @Column({ name: 'grievance_officer_name', type: 'varchar', length: 150, nullable: false })
  grievanceOfficerName: string;

  @Column({ name: 'grievance_officer_contact', type: 'char', length: 10, nullable: false })
  grievanceOfficerContact: string;

  @Column({ name: 'grievance_officer_email', type: 'varchar', length: 100, nullable: false })
  grievanceOfficerEmail: string;

  @Column({ name: 'ombudsman_name', type: 'varchar', length: 150, nullable: false })
  ombudsmanName: string;

  @Column({ name: 'ombudsman_contact', type: 'varchar', length: 100, nullable: false })
  ombudsmanContact: string;

  @Column({ name: 'ombudsman_email', type: 'varchar', length: 100, nullable: false })
  ombudsmanEmail: string;

  @Column({ name: 'insurance_opt_in', type: 'boolean', nullable: false })
  insuranceOptIn: boolean;

  @Column({ name: 'insurance_opt_out', type: 'boolean', nullable: false })
  insuranceOptOut: boolean;

  @Column({ name: 'esign_method', type: 'varchar', length: 20, nullable: false })
  esignMethod: string;

  @Column({ name: 'esign_reference_no', type: 'varchar', length: 100, nullable: false })
  esignReferenceNo: string;

  @Column({ name: 'signed_doc_hash_sha256', type: 'char', length: 64, nullable: false })
  signedDocHashSha256: string;

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
