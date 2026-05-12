import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_loan_application', schema: 'clm' })
export class ClmLoanApplication {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'loan_application_no_lan', type: 'varchar', length: 25, nullable: false, unique: true })
  loanApplicationNoLan: string;

  @Column({ name: 'clr_id', type: 'varchar', length: 25, nullable: false, unique: true })
  clrId: string;

  @Column({ name: 'application_request_date', type: 'date', nullable: false })
  applicationRequestDate: Date;

  @Column({ name: 'application_channel', type: 'varchar', length: 20, nullable: false })
  applicationChannel: string;

  @Column({ name: 'sourcing_branch', type: 'varchar', length: 100, nullable: false })
  sourcingBranch: string;

  @Column({ name: 'loan_branch', type: 'varchar', length: 100, nullable: false })
  loanBranch: string;

  @Column({ name: 'direct_sales_agent', type: 'varchar', length: 150, nullable: true })
  directSalesAgent: string | null;

  @Column({ name: 'product_variant', type: 'varchar', length: 30, nullable: false })
  productVariant: string;

  @Column({ name: 'repayment_variant', type: 'varchar', length: 30, nullable: true })
  repaymentVariant: string | null;

  @Column({ name: 'loan_facility_type', type: 'varchar', length: 20, nullable: false })
  loanFacilityType: string;

  @Column({ name: 'requested_loan_amount_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  requestedLoanAmountRs: string;

  @Column({ name: 'requested_tenor_months', type: 'smallint', nullable: false })
  requestedTenorMonths: number;

  @Column({ name: 'no_of_applicants', type: 'smallint', nullable: false })
  noOfApplicants: number;

  @Column({ name: 'applicant_cif_id', type: 'varchar', length: 20, nullable: false })
  applicantCifId: string;

  @Column({ name: 'co_applicant_cif_id', type: 'varchar', length: 20, nullable: true })
  coApplicantCifId: string | null;

  @Column({ name: 'guarantor_cif_id', type: 'varchar', length: 20, nullable: true })
  guarantorCifId: string | null;

  @Column({ name: 'loan_purpose', type: 'varchar', length: 50, nullable: false })
  loanPurpose: string;

  @Column({ name: 'end_use_monitoring_required', type: 'boolean', nullable: false })
  endUseMonitoringRequired: boolean;

  @Column({ name: 'psl_category', type: 'varchar', length: 30, nullable: false })
  pslCategory: string;

  @Column({ name: 'psl_sub_code', type: 'varchar', length: 20, nullable: false })
  pslSubCode: string;

  @Column({ name: 'interest_rate_type', type: 'varchar', length: 10, nullable: false })
  interestRateType: string;

  @Column({ name: 'actual_interest_rate_pct', type: 'decimal', precision: 7, scale: 4, nullable: false })
  actualInterestRatePct: string;

  @Column({ name: 'payment_frequency', type: 'varchar', length: 20, nullable: false })
  paymentFrequency: string;

  @Column({ name: 'stp_status', type: 'varchar', length: 10, nullable: false })
  stpStatus: string;

  @Column({ name: 'co_lending_ratio_display', type: 'varchar', length: 15, nullable: false })
  coLendingRatioDisplay: string;

  @Column({ name: 'sanctioned_amount_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  sanctionedAmountRs: string;

  @Column({ name: 'sanctioned_tenor_months', type: 'smallint', nullable: false })
  sanctionedTenorMonths: number;

  @Column({ name: 'total_finance_amount_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  totalFinanceAmountRs: string;

  @Column({ name: 'final_roi_pct', type: 'decimal', precision: 7, scale: 4, nullable: false })
  finalRoiPct: string;

  @Column({ name: 'total_fee_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  totalFeeRs: string;

  @Column({ name: 'emi_amount_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  emiAmountRs: string;

  @Column({ name: 'first_disbursement_amount_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  firstDisbursementAmountRs: string;

  @Column({ name: 'loan_start_date', type: 'date', nullable: false })
  loanStartDate: Date;

  @Column({ name: 'sanction_date', type: 'date', nullable: false })
  sanctionDate: Date;

  @Column({ name: 'application_stage', type: 'varchar', length: 25, nullable: true })
  applicationStage: string | null;

  @Column({ name: 'assigned_underwriter_id', type: 'varchar', length: 50, nullable: true })
  assignedUnderwriterId: string | null;

  @Column({ name: 'assigned_underwriter_name', type: 'varchar', length: 150, nullable: true })
  assignedUnderwriterName: string | null;

  @Column({ name: 'underwriter_tat_days', type: 'smallint', nullable: true })
  underwriterTatDays: number | null;

  @Column({ name: 'deviation_flag', type: 'boolean', nullable: true })
  deviationFlag: boolean | null;

  @Column({ name: 'deviation_description', type: 'varchar', length: 500, nullable: true })
  deviationDescription: string | null;

  @Column({ name: 'deviation_approver_id', type: 'varchar', length: 50, nullable: true })
  deviationApproverId: string | null;

  @Column({ name: 'deviation_approver_name', type: 'varchar', length: 150, nullable: true })
  deviationApproverName: string | null;

  @Column({ name: 'cam_id', type: 'varchar', length: 20, nullable: true })
  camId: string | null;

  @Column({ name: 'sanction_authority_level', type: 'varchar', length: 20, nullable: true })
  sanctionAuthorityLevel: string | null;

  @Column({ name: 'sanctioned_by_bank_user_id', type: 'varchar', length: 50, nullable: false })
  sanctionedByBankUserId: string;

  @Column({ name: 'sanctioned_by_bank_name', type: 'varchar', length: 150, nullable: false })
  sanctionedByBankName: string;

  @Column({ name: 'sanctioned_by_bank_date', type: 'timestamptz', nullable: false })
  sanctionedByBankDate: Date;

  @Column({ name: 'sanctioned_by_nbfc_user_id', type: 'varchar', length: 50, nullable: false })
  sanctionedByNbfcUserId: string;

  @Column({ name: 'sanctioned_by_nbfc_name', type: 'varchar', length: 150, nullable: false })
  sanctionedByNbfcName: string;

  @Column({ name: 'sanctioned_by_nbfc_date', type: 'timestamptz', nullable: false })
  sanctionedByNbfcDate: Date;

  @Column({ name: 'customer_acceptance_timestamp', type: 'timestamptz', nullable: false })
  customerAcceptanceTimestamp: Date;

  @Column({ name: 'sanction_letter_dispatch_mode', type: 'varchar', length: 15, nullable: false })
  sanctionLetterDispatchMode: string;

  @Column({ name: 'sanction_expiry_date', type: 'date', nullable: false })
  sanctionExpiryDate: Date;

  @Column({ name: 'sma_classification_at_origination', type: 'varchar', length: 10, nullable: false })
  smaClassificationAtOrigination: string;

  @Column({ name: 'psl_category_sub_code', type: 'varchar', length: 50, nullable: false })
  pslCategorySubCode: string;

  @Column({ name: 'loan_reference_number', type: 'varchar', length: 30, nullable: true })
  loanReferenceNumber: string | null;

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
