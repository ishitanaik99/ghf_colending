import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_product', schema: 'clm' })
export class ClmProduct {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'product_code', type: 'varchar', length: 20, nullable: true, unique: true })
  productCode: string | null;

  @Column({ name: 'product_name', type: 'varchar', length: 100, nullable: true })
  productName: string | null;

  @Column({ name: 'partner_a_code', type: 'varchar', length: 20, nullable: false })
  partnerACode: string;

  @Column({ name: 'partner_b_code', type: 'varchar', length: 20, nullable: false })
  partnerBCode: string;

  @Column({ name: 'partner_a_share_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  partnerASharePct: string;

  @Column({ name: 'partner_b_share_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  partnerBSharePct: string;

  @Column({ name: 'product_type', type: 'varchar', length: 30, nullable: true })
  productType: string | null;

  @Column({ name: 'product_nature', type: 'varchar', length: 15, nullable: true })
  productNature: string | null;

  @Column({ name: 'product_status', type: 'varchar', length: 10, nullable: true })
  productStatus: string | null;

  @Column({ name: 'product_expiry_date', type: 'date', nullable: true })
  productExpiryDate: Date | null;

  @Column({ name: 'loan_amount_min', type: 'decimal', precision: 12, scale: 2, nullable: true })
  loanAmountMin: string | null;

  @Column({ name: 'loan_amount_max', type: 'decimal', precision: 12, scale: 2, nullable: true })
  loanAmountMax: string | null;

  @Column({ name: 'tenure_min_months', type: 'smallint', nullable: true })
  tenureMinMonths: number | null;

  @Column({ name: 'tenure_max_months', type: 'smallint', nullable: true })
  tenureMaxMonths: number | null;

  @Column({ name: 'repayment_hierarchy_1', type: 'varchar', length: 15, nullable: true })
  repaymentHierarchy1: string | null;

  @Column({ name: 'repayment_hierarchy_2', type: 'varchar', length: 15, nullable: true })
  repaymentHierarchy2: string | null;

  @Column({ name: 'repayment_hierarchy_3', type: 'varchar', length: 15, nullable: true })
  repaymentHierarchy3: string | null;

  @Column({ name: 'repayment_hierarchy_4', type: 'varchar', length: 15, nullable: true })
  repaymentHierarchy4: string | null;

  @Column({ name: 'npa_hierarchy_1', type: 'varchar', length: 15, nullable: true })
  npaHierarchy1: string | null;

  @Column({ name: 'npa_hierarchy_2', type: 'varchar', length: 15, nullable: true })
  npaHierarchy2: string | null;

  @Column({ name: 'npa_hierarchy_3', type: 'varchar', length: 15, nullable: true })
  npaHierarchy3: string | null;

  @Column({ name: 'npa_hierarchy_4', type: 'varchar', length: 15, nullable: true })
  npaHierarchy4: string | null;

  @Column({ name: 'day_appropriation_logic', type: 'varchar', length: 50, nullable: true })
  dayAppropriationLogic: string | null;

  @Column({ name: 'billing_date', type: 'smallint', nullable: true })
  billingDate: number | null;

  @Column({ name: 'amortization_rule', type: 'varchar', length: 30, nullable: true })
  amortizationRule: string | null;

  @Column({ name: 'interest_rate_type', type: 'varchar', length: 10, nullable: false })
  interestRateType: string;

  @Column({ name: 'roi_pct', type: 'decimal', precision: 7, scale: 4, nullable: false })
  roiPct: string;

  @Column({ name: 'base_rate_benchmark', type: 'varchar', length: 10, nullable: false })
  baseRateBenchmark: string;

  @Column({ name: 'spread_over_benchmark_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  spreadOverBenchmarkPct: string;

  @Column({ name: 'processing_fee_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  processingFeePct: string;

  @Column({ name: 'processing_fee_cap_rs', type: 'decimal', precision: 12, scale: 2, nullable: false })
  processingFeeCapRs: string;

  @Column({ name: 'prepayment_charge_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  prepaymentChargePct: string;

  @Column({ name: 'penal_interest_rate_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  penalInterestRatePct: string;

  @Column({ name: 'penal_charge_basis', type: 'varchar', length: 30, nullable: false })
  penalChargeBasis: string;

  @Column({ name: 'nominal_charges_basis', type: 'varchar', length: 30, nullable: true })
  nominalChargesBasis: string | null;

  @Column({ name: 'nominal_charges_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  nominalChargesPct: string | null;

  @Column({ name: 'ltv_max_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  ltvMaxPct: string;

  @Column({ name: 'co_lending_ratio_bank_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  coLendingRatioBankPct: string;

  @Column({ name: 'co_lending_ratio_nbfc_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  coLendingRatioNbfcPct: string;

  @Column({ name: 'blended_rate_pct', type: 'decimal', precision: 7, scale: 4, nullable: false })
  blendedRatePct: string;

  @Column({ name: 'insurance_mandatory', type: 'boolean', nullable: false })
  insuranceMandatory: boolean;

  @Column({ name: 'insurance_opt_out_allowed', type: 'boolean', nullable: false })
  insuranceOptOutAllowed: boolean;

  @Column({ name: 'cersai_charge_flag', type: 'boolean', nullable: false })
  cersaiChargeFlag: boolean;

  @Column({ name: 'repayment_mode_nach', type: 'boolean', nullable: true })
  repaymentModeNach: boolean | null;

  @Column({ name: 'repayment_mode_neft', type: 'boolean', nullable: true })
  repaymentModeNeft: boolean | null;

  @Column({ name: 'repayment_mode_upi', type: 'boolean', nullable: true })
  repaymentModeUpi: boolean | null;

  @Column({ name: 'repayment_mode_pdc', type: 'boolean', nullable: true })
  repaymentModePdc: boolean | null;

  @Column({ name: 'repayment_mode_cash', type: 'boolean', nullable: true })
  repaymentModeCash: boolean | null;

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
