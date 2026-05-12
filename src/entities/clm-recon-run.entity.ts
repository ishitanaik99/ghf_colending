import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_recon_run', schema: 'clm' })
export class ClmReconRun {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'recon_run_id', type: 'varchar', length: 25, nullable: true, unique: true })
  reconRunId: string | null;

  @Column({ name: 'recon_date', type: 'date', nullable: true })
  reconDate: Date | null;

  @Column({ name: 'partner_code', type: 'varchar', length: 20, nullable: true })
  partnerCode: string | null;

  @Column({ name: 'soa_file_reference', type: 'varchar', length: 100, nullable: false })
  soaFileReference: string;

  @Column({ name: 'soa_s3_path', type: 'varchar', length: 500, nullable: false })
  soaS3Path: string;

  @Column({ name: 'soa_opening_balance_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  soaOpeningBalanceRs: string;

  @Column({ name: 'soa_closing_balance_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  soaClosingBalanceRs: string;

  @Column({ name: 'soa_total_credits_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  soaTotalCreditsRs: string;

  @Column({ name: 'soa_total_debits_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  soaTotalDebitsRs: string;

  @Column({ name: 'soa_transaction_count', type: 'integer', nullable: false })
  soaTransactionCount: number;

  @Column({ name: 'rps_file_reference', type: 'varchar', length: 100, nullable: false })
  rpsFileReference: string;

  @Column({ name: 'rps_total_collections_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  rpsTotalCollectionsRs: string;

  @Column({ name: 'gl_voucher_batch_reference', type: 'varchar', length: 100, nullable: false })
  glVoucherBatchReference: string;

  @Column({ name: 'gl_batch_total_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  glBatchTotalRs: string;

  @Column({ name: 'matched_count', type: 'integer', nullable: false })
  matchedCount: number;

  @Column({ name: 'partial_match_count', type: 'integer', nullable: false })
  partialMatchCount: number;

  @Column({ name: 'unmatched_count', type: 'integer', nullable: false })
  unmatchedCount: number;

  @Column({ name: 'total_break_amount_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  totalBreakAmountRs: string;

  @Column({ name: 'recon_status', type: 'varchar', length: 20, nullable: true })
  reconStatus: string | null;

  @Column({ name: 'sla_breach_flag', type: 'boolean', nullable: true })
  slaBreachFlag: boolean | null;

  @Column({ name: 'approved_by_finance_user_id', type: 'varchar', length: 50, nullable: false })
  approvedByFinanceUserId: string;

  @Column({ name: 'approved_by_finance_name', type: 'varchar', length: 150, nullable: false })
  approvedByFinanceName: string;

  @Column({ name: 'approved_by_finance_timestamp', type: 'timestamptz', nullable: false })
  approvedByFinanceTimestamp: Date;

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
