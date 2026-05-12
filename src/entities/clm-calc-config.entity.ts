import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_calc_config', schema: 'clm' })
export class ClmCalcConfig {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'config_id', type: 'varchar', length: 20, nullable: false, unique: true })
  configId: string;

  @Column({ name: 'partner_code', type: 'varchar', length: 20, nullable: false })
  partnerCode: string;

  @Column({ name: 'linked_product_code', type: 'varchar', length: 20, nullable: true })
  linkedProductCode: string | null;

  @Column({ name: 'allowed_emi_option', type: 'varchar', length: 100, nullable: false })
  allowedEmiOption: string;

  @Column({ name: 'emi_calc_method', type: 'varchar', length: 30, nullable: false })
  emiCalcMethod: string;

  @Column({ name: 'repay_cycle_type', type: 'varchar', length: 20, nullable: false })
  repayCycleType: string;

  @Column({ name: 'emi_round_method', type: 'varchar', length: 20, nullable: false })
  emiRoundMethod: string;

  @Column({ name: 'emi_offset_party', type: 'varchar', length: 10, nullable: false })
  emiOffsetParty: string;

  @Column({ name: 'partner_interest_round_method', type: 'varchar', length: 20, nullable: true })
  partnerInterestRoundMethod: string | null;

  @Column({ name: 'partner_principal_round_method', type: 'varchar', length: 20, nullable: true })
  partnerPrincipalRoundMethod: string | null;

  @Column({ name: 'interest_calc_method', type: 'varchar', length: 20, nullable: false })
  interestCalcMethod: string;

  @Column({ name: 'interest_round_method', type: 'varchar', length: 20, nullable: false })
  interestRoundMethod: string;

  @Column({ name: 'installment_due_method', type: 'varchar', length: 15, nullable: false })
  installmentDueMethod: string;

  @Column({ name: 'interest_cycle_method', type: 'varchar', length: 20, nullable: false })
  interestCycleMethod: string;

  @Column({ name: 'broken_period_interest_numerator', type: 'varchar', length: 10, nullable: true })
  brokenPeriodInterestNumerator: string | null;

  @Column({ name: 'broken_period_interest_denominator', type: 'varchar', length: 10, nullable: true })
  brokenPeriodInterestDenominator: string | null;

  @Column({ name: 'broken_period_round_method', type: 'varchar', length: 20, nullable: true })
  brokenPeriodRoundMethod: string | null;

  @Column({ name: 'charges_round_method', type: 'varchar', length: 20, nullable: true })
  chargesRoundMethod: string | null;

  @Column({ name: 'pre_emi_days_method', type: 'varchar', length: 30, nullable: true })
  preEmiDaysMethod: string | null;

  @Column({ name: 'legal_approval_required', type: 'boolean', nullable: true })
  legalApprovalRequired: boolean | null;

  @Column({ name: 'bank_verification_required', type: 'boolean', nullable: true })
  bankVerificationRequired: boolean | null;

  @Column({ name: 'sl_checker_required', type: 'boolean', nullable: true })
  slCheckerRequired: boolean | null;

  @Column({ name: 'jl_checker_required', type: 'boolean', nullable: true })
  jlCheckerRequired: boolean | null;

  @Column({ name: 'sms_emi_notification_enabled', type: 'boolean', nullable: true })
  smsEmiNotificationEnabled: boolean | null;

  @Column({ name: 'interest_start_date_method', type: 'varchar', length: 30, nullable: true })
  interestStartDateMethod: string | null;

  @Column({ name: 'other_income_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  otherIncomePct: string | null;

  @Column({ name: 'min_disbursal_days', type: 'smallint', nullable: true })
  minDisbursalDays: number | null;

  @Column({ name: 'max_disbursal_days', type: 'smallint', nullable: true })
  maxDisbursalDays: number | null;

  @Column({ name: 'disburse_on_emi_date_flag', type: 'boolean', nullable: true })
  disburseOnEmiDateFlag: boolean | null;

  @Column({ name: 'doc_checklist_required', type: 'boolean', nullable: true })
  docChecklistRequired: boolean | null;

  @Column({ name: 'case_creation_modes', type: 'varchar', length: 100, nullable: true })
  caseCreationModes: string | null;

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
