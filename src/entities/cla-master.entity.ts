import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

// ─── Enums (mirror your Java enums; expand values as needed) ─────────────────

export enum AgreementTypeEnum {
  // Add your actual enum values here from your Java AgreementTypeEnum
  STANDARD = 'STANDARD',
  CUSTOM = 'CUSTOM',
}

export enum ServicingFeeLogicEnum {
  FLAT = 'FLAT',
  PERCENTAGE = 'PERCENTAGE',
}

export enum FeeBasisEnum {
  OUTSTANDING = 'OUTSTANDING',
  DISBURSED = 'DISBURSED',
}

export enum UnderwritingOwnershipEnum {
  BANK = 'BANK',
  NBFC = 'NBFC',
  JOINT = 'JOINT',
}

export enum PslSubCategoryEnum {
  AGRICULTURE = 'AGRICULTURE',
  MSME = 'MSME',
  HOUSING = 'HOUSING',
  EDUCATION = 'EDUCATION',
  RENEWABLE_ENERGY = 'RENEWABLE_ENERGY',
  OTHERS = 'OTHERS',
}

export enum RepaymentCollectionAgentEnum {
  BANK = 'BANK',
  NBFC = 'NBFC',
}

export enum SettlementFrequencyEnum {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
}

// ─── Entity ──────────────────────────────────────────────────────────────────

@Entity({ name: 'cla_master_agreement', schema: 'ghf_colending' })
export class ClaMaster {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: number;

  @Column({ name: 'agreement_id', type: 'varchar', length: 12, nullable: false, unique: true })
  agreementId: string;

  @Column({ name: 'agreement_type', type: 'varchar', nullable: false })
  agreementType: AgreementTypeEnum;

  @Column({ name: 'bank_lending_ratio_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  bankLendingRatioPct: string;

  @Column({ name: 'nbfc_lending_ratio_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  nbfcLendingRatioPct: string;

  @Column({ name: 'bank_interest_rate_pct', type: 'decimal', precision: 7, scale: 4, nullable: false })
  bankInterestRatePct: string;

  @Column({ name: 'nbfc_interest_rate_pct', type: 'decimal', precision: 7, scale: 4, nullable: false })
  nbfcInterestRatePct: string;

  @Column({ name: 'customer_apr_pct', type: 'decimal', precision: 7, scale: 4, nullable: false })
  customerAprPct: string;

  @Column({ name: 'servicing_fee_logic', type: 'varchar', nullable: false })
  servicingFeeLogic: ServicingFeeLogicEnum;

  @Column({ name: 'servicing_fee_pct', type: 'decimal', precision: 7, scale: 4, nullable: true })
  servicingFeePct: string | null;

  @Column({ name: 'servicing_fee_basis', type: 'varchar', nullable: true })
  servicingFeeBasis: FeeBasisEnum | null;

  @Column({ name: 'fee_split_value', type: 'decimal', precision: 10, scale: 4, nullable: true })
  feeSplitValue: string | null;

  @Column({ name: 'underwriting_ownership', type: 'varchar', nullable: false })
  underwritingOwnership: UnderwritingOwnershipEnum;

  @Column({ name: 'dlg_applicable', type: 'boolean', nullable: false, default: false })
  dlgApplicable: boolean;

  @Column({ name: 'dlg_provider', type: 'varchar', length: 255, nullable: true })
  dlgProvider: string | null;

  @Column({ name: 'dlg_cap_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  dlgCapPct: string | null;

  @Column({ name: 'bank_loss_sharing_ratio_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  bankLossSharingRatioPct: string;

  @Column({ name: 'nbfc_loss_sharing_ratio_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  nbfcLossSharingRatioPct: string;

  @Column({ name: 'escrow_account_number', type: 'varchar', length: 18, nullable: false })
  escrowAccountNumber: string;

  @Column({ name: 'escrow_bank_name', type: 'varchar', length: 255, nullable: false })
  escrowBankName: string;

  @Column({ name: 'escrow_ifsc_code', type: 'varchar', length: 11, nullable: false })
  escrowIfscCode: string;

  @Column({ name: 'psl_eligible', type: 'boolean', nullable: false, default: false })
  pslEligible: boolean;

  @Column({ name: 'psl_sub_category', type: 'varchar', nullable: true })
  pslSubCategory: PslSubCategoryEnum | null;

  @Column({ name: 'repayment_collection_agent', type: 'varchar', nullable: false })
  repaymentCollectionAgent: RepaymentCollectionAgentEnum;

  @Column({ name: 'settlement_frequency', type: 'varchar', nullable: false })
  settlementFrequency: SettlementFrequencyEnum;

  @Column({ name: 'grievance_escalation_tat_days', type: 'int', nullable: false })
  grievanceEscalationTatDays: number;

  @Column({ name: 'exit_clause_notice_period_days', type: 'int', nullable: true })
  exitClauseNoticePeriodDays: number | null;

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