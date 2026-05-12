import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

// ─── Enums ────────────────────────────────────────────────────────────────────

export enum ProductTypeEnum {
  HOME_LOAN = 'HOME_LOAN',
  LAP = 'LAP',
  PERSONAL_LOAN = 'PERSONAL_LOAN',
  BUSINESS_LOAN = 'BUSINESS_LOAN',
}

export enum InterestRateTypeEnum {
  FIXED = 'FIXED',
  FLOATING = 'FLOATING',
}

export enum BaseRateBenchmarkEnum {
  REPO = 'REPO',
  MCLR = 'MCLR',
  PLR = 'PLR',
}

export enum PenalChargeBasisEnum {
  OVERDUE_EMI = 'OVERDUE_EMI',
  OUTSTANDING_PRINCIPAL = 'OUTSTANDING_PRINCIPAL',
}

// ─── Entity ───────────────────────────────────────────────────────────────────

@Entity({ name: 'product_config_master', schema: 'ghf_colending' })
export class ProductConfigMaster {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: number;

  @Column({ name: 'product_code', type: 'varchar', length: 20, nullable: false, unique: true })
  productCode: string;

  @Column({ name: 'product_name', type: 'varchar', length: 150, nullable: false })
  productName: string;

  @Column({ name: 'product_type', type: 'varchar', nullable: false })
  productType: ProductTypeEnum;

  @Column({ name: 'loan_amt_min', type: 'decimal', precision: 12, scale: 2, nullable: false })
  loanAmtMin: string;

  @Column({ name: 'loan_amt_max', type: 'decimal', precision: 12, scale: 2, nullable: false })
  loanAmtMax: string;

  @Column({ name: 'tenure_min_months', type: 'int', nullable: false })
  tenureMinMonths: number;

  @Column({ name: 'tenure_max_months', type: 'int', nullable: false })
  tenureMaxMonths: number;

  @Column({ name: 'interest_rate_type', type: 'varchar', nullable: false })
  interestRateType: InterestRateTypeEnum;

  @Column({ name: 'base_rate_benchmark', type: 'varchar', nullable: false })
  baseRateBenchmark: BaseRateBenchmarkEnum;

  @Column({ name: 'spread_over_benchmark_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  spreadOverBenchmarkPct: string | null;

  @Column({ name: 'processing_fee_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  processingFeePct: string | null;

  @Column({ name: 'processing_fee_cap_rs', type: 'decimal', precision: 12, scale: 2, nullable: true })
  processingFeeCapRs: string | null;

  @Column({ name: 'prepayment_charges_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  prepaymentChargesPct: string | null;

  @Column({ name: 'penal_interest_rate_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  penalInterestRatePct: string | null;

  @Column({ name: 'penal_charge_basis', type: 'varchar', nullable: true })
  penalChargeBasis: PenalChargeBasisEnum | null;

  @Column({ name: 'ltv_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  ltvPct: string | null;

  @Column({ name: 'bank_colending_ratio_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  bankColendingRatioPct: string | null;

  @Column({ name: 'nbfc_colending_ratio_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  nbfcColendingRatioPct: string | null;

  @Column({ name: 'insurance_mandatory', type: 'boolean', nullable: false, default: false })
  insuranceMandatory: boolean;

  @Column({ name: 'insurance_opt_out_allowed', type: 'boolean', nullable: false, default: true })
  insuranceOptOutAllowed: boolean;

  @Column({ name: 'cersai_charge_flag', type: 'boolean', nullable: false, default: false })
  cersaiChargeFlag: boolean;

  // NOTE: PostgreSQL native enum array (ghf_colending.repayment_mode_enum[]) requires
  // a custom TypeORM transformer. Stored as simple text[] for now.
  // If you use a custom DB enum type, you'll need a @Column({ type: 'simple-array' }) 
  // or a custom TypeORM ValueTransformer.
  @Column({ name: 'repayment_modes', type: 'simple-array', nullable: false })
  repaymentModes: string[];

  @Column({ name: 'created_at', type: 'timestamp', nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp', nullable: false })
  updatedAt: Date;

  @BeforeInsert()
  setCreatedAt() {
    const now = new Date();
    this.createdAt = now;
    this.updatedAt = now;
  }

  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = new Date();
  }
}