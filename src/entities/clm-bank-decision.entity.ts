import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_bank_decision', schema: 'clm' })
export class ClmBankDecision {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'bank_decision_id', type: 'varchar', length: 20, nullable: false, unique: true })
  bankDecisionId: string;

  @Column({ name: 'loan_application_no_lan', type: 'varchar', length: 25, nullable: false })
  loanApplicationNoLan: string;

  @Column({ name: 'clr_id', type: 'varchar', length: 25, nullable: false })
  clrId: string;

  @Column({ name: 'bank_decision', type: 'varchar', length: 15, nullable: false })
  bankDecision: string;

  @Column({ name: 'bank_decision_status', type: 'varchar', length: 15, nullable: false })
  bankDecisionStatus: string;

  @Column({ name: 'bank_remarks', type: 'varchar', length: 500, nullable: false })
  bankRemarks: string;

  @Column({ name: 'bank_sanctioned_amount_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  bankSanctionedAmountRs: string;

  @Column({ name: 'bank_interest_rate_pct', type: 'decimal', precision: 7, scale: 4, nullable: false })
  bankInterestRatePct: string;

  @Column({ name: 'approved_ltv_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  approvedLtvPct: string | null;

  @Column({ name: 'reject_reason_code', type: 'varchar', length: 30, nullable: true })
  rejectReasonCode: string | null;

  @Column({ name: 'refer_back_query', type: 'varchar', length: 500, nullable: true })
  referBackQuery: string | null;

  @Column({ name: 'bank_officer_user_id', type: 'varchar', length: 50, nullable: false })
  bankOfficerUserId: string;

  @Column({ name: 'bank_officer_name', type: 'varchar', length: 150, nullable: false })
  bankOfficerName: string;

  @Column({ name: 'bank_decision_timestamp', type: 'timestamptz', nullable: false })
  bankDecisionTimestamp: Date;

  @Column({ name: 'bank_sanction_reference_no', type: 'varchar', length: 30, nullable: false })
  bankSanctionReferenceNo: string;

  @Column({ name: 'dual_sanction_completion_flag', type: 'boolean', nullable: false })
  dualSanctionCompletionFlag: boolean;

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
