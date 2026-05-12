import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_recon_line_item', schema: 'clm' })
export class ClmReconLineItem {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'recon_run_id', type: 'varchar', length: 25, nullable: false })
  reconRunId: string;

  @Column({ name: 'utr_rrn', type: 'varchar', length: 22, nullable: false })
  utrRrn: string;

  @Column({ name: 'soa_transaction_date', type: 'date', nullable: false })
  soaTransactionDate: Date;

  @Column({ name: 'soa_value_date', type: 'date', nullable: false })
  soaValueDate: Date;

  @Column({ name: 'soa_debit_amount_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  soaDebitAmountRs: string;

  @Column({ name: 'soa_credit_amount_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  soaCreditAmountRs: string;

  @Column({ name: 'soa_narration', type: 'varchar', length: 300, nullable: false })
  soaNarration: string;

  @Column({ name: 'rps_loan_account_lan', type: 'varchar', length: 25, nullable: false })
  rpsLoanAccountLan: string;

  @Column({ name: 'rps_amount_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  rpsAmountRs: string;

  @Column({ name: 'rps_payment_mode', type: 'varchar', length: 15, nullable: false })
  rpsPaymentMode: string;

  @Column({ name: 'rps_principal_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  rpsPrincipalRs: string;

  @Column({ name: 'rps_interest_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  rpsInterestRs: string;

  @Column({ name: 'rps_penalty_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  rpsPenaltyRs: string;

  @Column({ name: 'rps_charges_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  rpsChargesRs: string;

  @Column({ name: 'gl_voucher_no', type: 'varchar', length: 50, nullable: false })
  glVoucherNo: string;

  @Column({ name: 'gl_debit_account_code', type: 'varchar', length: 20, nullable: false })
  glDebitAccountCode: string;

  @Column({ name: 'gl_credit_account_code', type: 'varchar', length: 20, nullable: false })
  glCreditAccountCode: string;

  @Column({ name: 'gl_amount_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  glAmountRs: string;

  @Column({ name: 'three_way_match_status', type: 'varchar', length: 20, nullable: true })
  threeWayMatchStatus: string | null;

  @Column({ name: 'break_category', type: 'varchar', length: 25, nullable: true })
  breakCategory: string | null;

  @Column({ name: 'break_resolver_queue', type: 'varchar', length: 15, nullable: true })
  breakResolverQueue: string | null;

  @Column({ name: 'resolution_notes', type: 'varchar', length: 500, nullable: true })
  resolutionNotes: string | null;

  @Column({ name: 'resolution_date', type: 'date', nullable: true })
  resolutionDate: Date | null;

  @Column({ name: 'resolved_by_user_id', type: 'varchar', length: 50, nullable: true })
  resolvedByUserId: string | null;

  @Column({ name: 'resolved_by_name', type: 'varchar', length: 150, nullable: true })
  resolvedByName: string | null;

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
