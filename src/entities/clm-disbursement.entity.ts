import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_disbursement', schema: 'clm' })
export class ClmDisbursement {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'dir_id', type: 'varchar', length: 20, nullable: false, unique: true })
  dirId: string;

  @Column({ name: 'loan_account_no_lan', type: 'varchar', length: 25, nullable: false })
  loanAccountNoLan: string;

  @Column({ name: 'clr_id', type: 'varchar', length: 25, nullable: false })
  clrId: string;

  @Column({ name: 'disbursement_type', type: 'varchar', length: 10, nullable: true })
  disbursementType: string | null;

  @Column({ name: 'tranche_number', type: 'smallint', nullable: true })
  trancheNumber: number | null;

  @Column({ name: 'total_sanctioned_amount_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  totalSanctionedAmountRs: string;

  @Column({ name: 'disbursement_amount_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  disbursementAmountRs: string;

  @Column({ name: 'bank_portion_amount_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  bankPortionAmountRs: string;

  @Column({ name: 'nbfc_portion_amount_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  nbfcPortionAmountRs: string;

  @Column({ name: 'beneficiary_account_number', type: 'varchar', length: 20, nullable: false })
  beneficiaryAccountNumber: string;

  @Column({ name: 'beneficiary_ifsc_code', type: 'char', length: 11, nullable: false })
  beneficiaryIfscCode: string;

  @Column({ name: 'beneficiary_name', type: 'varchar', length: 150, nullable: false })
  beneficiaryName: string;

  @Column({ name: 'payment_rail', type: 'varchar', length: 10, nullable: false })
  paymentRail: string;

  @Column({ name: 'escrow_debit_account_no', type: 'varchar', length: 18, nullable: false })
  escrowDebitAccountNo: string;

  @Column({ name: 'utr_rrn_no', type: 'varchar', length: 22, nullable: false })
  utrRrnNo: string;

  @Column({ name: 'payment_status', type: 'varchar', length: 15, nullable: false })
  paymentStatus: string;

  @Column({ name: 'maker_user_id', type: 'varchar', length: 50, nullable: false })
  makerUserId: string;

  @Column({ name: 'maker_timestamp', type: 'timestamptz', nullable: false })
  makerTimestamp: Date;

  @Column({ name: 'checker_user_id', type: 'varchar', length: 50, nullable: false })
  checkerUserId: string;

  @Column({ name: 'checker_timestamp', type: 'timestamptz', nullable: false })
  checkerTimestamp: Date;

  @Column({ name: 'nbfc_remittance_status', type: 'varchar', length: 10, nullable: false })
  nbfcRemittanceStatus: string;

  @Column({ name: 'nbfc_remittance_utr', type: 'varchar', length: 22, nullable: false })
  nbfcRemittanceUtr: string;

  @Column({ name: 'nbfc_remittance_date', type: 'date', nullable: false })
  nbfcRemittanceDate: Date;

  @Column({ name: 'lms_account_created_flag', type: 'boolean', nullable: false })
  lmsAccountCreatedFlag: boolean;

  @Column({ name: 'first_emi_date', type: 'date', nullable: false })
  firstEmiDate: Date;

  @Column({ name: 'nach_ecs_mandate_status', type: 'varchar', length: 15, nullable: false })
  nachEcsMandateStatus: string;

  @Column({ name: 'nach_umrn', type: 'varchar', length: 20, nullable: false })
  nachUmrn: string;

  @Column({ name: 'processing_fee_deducted_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  processingFeeDeductedRs: string;

  @Column({ name: 'insurance_deducted_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  insuranceDeductedRs: string;

  @Column({ name: 'net_amount_to_customer_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  netAmountToCustomerRs: string;

  @Column({ name: 'idempotency_key', type: 'char', length: 36, nullable: true })
  idempotencyKey: string | null;

  @Column({ name: 'margin_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  marginPct: string;

  @Column({ name: 'final_rate_pct', type: 'decimal', precision: 7, scale: 4, nullable: false })
  finalRatePct: string;

  @Column({ name: 'schedule_method', type: 'varchar', length: 30, nullable: false })
  scheduleMethod: string;

  @Column({ name: 'interest_frequency', type: 'varchar', length: 20, nullable: false })
  interestFrequency: string;

  @Column({ name: 'number_of_instruments', type: 'smallint', nullable: true })
  numberOfInstruments: number | null;

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
