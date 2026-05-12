import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_partner_soa', schema: 'clm' })
export class ClmPartnerSoa {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'partner_soa_id', type: 'varchar', length: 20, nullable: false, unique: true })
  partnerSoaId: string;

  @Column({ name: 'partner_code', type: 'varchar', length: 20, nullable: false })
  partnerCode: string;

  @Column({ name: 'period_from_date', type: 'date', nullable: false })
  periodFromDate: Date;

  @Column({ name: 'period_to_date', type: 'date', nullable: false })
  periodToDate: Date;

  @Column({ name: 'opening_principal_balance_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  openingPrincipalBalanceRs: string;

  @Column({ name: 'closing_principal_balance_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  closingPrincipalBalanceRs: string;

  @Column({ name: 'disbursements_in_period_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  disbursementsInPeriodRs: string;

  @Column({ name: 'principal_repaid_in_period_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  principalRepaidInPeriodRs: string;

  @Column({ name: 'gross_interest_earned_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  grossInterestEarnedRs: string;

  @Column({ name: 'bank_interest_share_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  bankInterestShareRs: string;

  @Column({ name: 'nbfc_interest_share_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  nbfcInterestShareRs: string;

  @Column({ name: 'servicing_fee_payable_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  servicingFeePayableRs: string;

  @Column({ name: 'net_settlement_amount_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  netSettlementAmountRs: string;

  @Column({ name: 'settlement_instruction_id', type: 'varchar', length: 20, nullable: false })
  settlementInstructionId: string;

  @Column({ name: 'settlement_rtgs_utr', type: 'varchar', length: 22, nullable: false })
  settlementRtgsUtr: string;

  @Column({ name: 'settlement_date', type: 'date', nullable: false })
  settlementDate: Date;

  @Column({ name: 'npa_portfolio_split_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  npaPortfolioSplitRs: string;

  @Column({ name: 'npa_provision_amount_rs', type: 'decimal', precision: 15, scale: 2, nullable: false })
  npaProvisionAmountRs: string;

  @Column({ name: 'soa_dispatch_status', type: 'varchar', length: 15, nullable: false })
  soaDispatchStatus: string;

  @Column({ name: 'soa_acknowledgement_date', type: 'date', nullable: false })
  soaAcknowledgementDate: Date;

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
