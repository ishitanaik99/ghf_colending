import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_credit_scorecard', schema: 'clm' })
export class ClmCreditScorecard {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'application_id', type: 'varchar', length: 25, nullable: false, unique: true })
  applicationId: string;

  @Column({ name: 'clr_id', type: 'varchar', length: 25, nullable: false, unique: true })
  clrId: string;

  @Column({ name: 'applied_loan_amount_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  appliedLoanAmountRs: string;

  @Column({ name: 'applied_tenure_months', type: 'smallint', nullable: false })
  appliedTenureMonths: number;

  @Column({ name: 'cibil_score_at_application', type: 'smallint', nullable: false })
  cibilScoreAtApplication: number;

  @Column({ name: 'cibil_pull_timestamp', type: 'timestamptz', nullable: false })
  cibilPullTimestamp: Date;

  @Column({ name: 'active_loans_count', type: 'smallint', nullable: false })
  activeLoansCount: number;

  @Column({ name: 'dpd_30plus_count_24m', type: 'smallint', nullable: false })
  dpd30plusCount24m: number;

  @Column({ name: 'dpd_90plus_count_24m', type: 'smallint', nullable: false })
  dpd90plusCount24m: number;

  @Column({ name: 'enquiry_count_6m', type: 'smallint', nullable: false })
  enquiryCount6m: number;

  @Column({ name: 'total_emi_obligation_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  totalEmiObligationRs: string;

  @Column({ name: 'foir_current_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  foirCurrentPct: string;

  @Column({ name: 'foir_post_emi_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  foirPostEmiPct: string;

  @Column({ name: 'ltv_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  ltvPct: string;

  @Column({ name: 'bre_decision', type: 'varchar', length: 15, nullable: false })
  breDecision: string;

  @Column({ name: 'bre_decision_code', type: 'varchar', length: 20, nullable: false })
  breDecisionCode: string;

  @Column({ name: 'bre_reason_customer', type: 'varchar', length: 500, nullable: false })
  breReasonCustomer: string;

  @Column({ name: 'negative_list_status', type: 'varchar', length: 10, nullable: false })
  negativeListStatus: string;

  @Column({ name: 'sanctioned_amount_bank_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  sanctionedAmountBankRs: string;

  @Column({ name: 'sanctioned_amount_nbfc_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  sanctionedAmountNbfcRs: string;

  @Column({ name: 'sanctioned_apr_pct', type: 'decimal', precision: 7, scale: 4, nullable: false })
  sanctionedAprPct: string;

  @Column({ name: 'sanctioned_tenure_months', type: 'smallint', nullable: false })
  sanctionedTenureMonths: number;

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
