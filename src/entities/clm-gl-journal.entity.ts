import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_gl_journal', schema: 'clm' })
export class ClmGlJournal {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'journal_voucher_id', type: 'varchar', length: 25, nullable: false, unique: true })
  journalVoucherId: string;

  @Column({ name: 'journal_type', type: 'varchar', length: 20, nullable: false })
  journalType: string;

  @Column({ name: 'source_event_id', type: 'varchar', length: 25, nullable: false })
  sourceEventId: string;

  @Column({ name: 'source_event_type', type: 'varchar', length: 20, nullable: false })
  sourceEventType: string;

  @Column({ name: 'voucher_date', type: 'date', nullable: false })
  voucherDate: Date;

  @Column({ name: 'accounting_period', type: 'char', length: 7, nullable: false })
  accountingPeriod: string;

  @Column({ name: 'debit_account_code', type: 'varchar', length: 20, nullable: false })
  debitAccountCode: string;

  @Column({ name: 'debit_account_name', type: 'varchar', length: 100, nullable: false })
  debitAccountName: string;

  @Column({ name: 'debit_amount_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  debitAmountRs: string;

  @Column({ name: 'credit_account_code', type: 'varchar', length: 20, nullable: false })
  creditAccountCode: string;

  @Column({ name: 'credit_account_name', type: 'varchar', length: 100, nullable: false })
  creditAccountName: string;

  @Column({ name: 'credit_amount_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  creditAmountRs: string;

  @Column({ name: 'cost_center', type: 'varchar', length: 30, nullable: true })
  costCenter: string | null;

  @Column({ name: 'profit_center', type: 'varchar', length: 30, nullable: true })
  profitCenter: string | null;

  @Column({ name: 'narration', type: 'varchar', length: 200, nullable: false })
  narration: string;

  @Column({ name: 'erp_document_number', type: 'varchar', length: 50, nullable: false })
  erpDocumentNumber: string;

  @Column({ name: 'erp_posting_status', type: 'varchar', length: 20, nullable: false })
  erpPostingStatus: string;

  @Column({ name: 'erp_posting_timestamp', type: 'timestamptz', nullable: false })
  erpPostingTimestamp: Date;

  @Column({ name: 'npa_classification', type: 'varchar', length: 20, nullable: false })
  npaClassification: string;

  @Column({ name: 'days_past_due_dpd', type: 'integer', nullable: false })
  daysPastDueDpd: number;

  @Column({ name: 'provision_rate_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  provisionRatePct: string;

  @Column({ name: 'provision_amount_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  provisionAmountRs: string;

  @Column({ name: 'approved_by_user1_id', type: 'varchar', length: 50, nullable: false })
  approvedByUser1Id: string;

  @Column({ name: 'approved_by_user1_name', type: 'varchar', length: 150, nullable: false })
  approvedByUser1Name: string;

  @Column({ name: 'approved_by_user2_id', type: 'varchar', length: 50, nullable: false })
  approvedByUser2Id: string;

  @Column({ name: 'approved_by_user2_name', type: 'varchar', length: 150, nullable: false })
  approvedByUser2Name: string;

  @Column({ name: 'tds_deducted_rs', type: 'decimal', precision: 12, scale: 2, nullable: true })
  tdsDeductedRs: string | null;

  @Column({ name: 'tds_challan_no', type: 'varchar', length: 50, nullable: true })
  tdsChallanNo: string | null;

  @Column({ name: 'gst_on_fees_rs', type: 'decimal', precision: 12, scale: 2, nullable: true })
  gstOnFeesRs: string | null;

  @Column({ name: 'gst_challan_ref', type: 'varchar', length: 50, nullable: true })
  gstChallanRef: string | null;

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
