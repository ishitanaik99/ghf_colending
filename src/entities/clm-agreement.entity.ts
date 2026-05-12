import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_agreement', schema: 'clm' })
export class ClmAgreement {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'agreement_id', type: 'varchar', length: 20, nullable: false, unique: true })
  agreementId: string;

  @Column({ name: 'agreement_type', type: 'varchar', length: 20, nullable: false })
  agreementType: string;

  @Column({ name: 'link_partner_code_jr', type: 'varchar', length: 20, nullable: false })
  linkPartnerCodeJr: string;

  @Column({ name: 'link_partner_code_sr', type: 'varchar', length: 20, nullable: false })
  linkPartnerCodeSr: string;

  @Column({ name: 'bank_lending_ratio_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  bankLendingRatioPct: string;

  @Column({ name: 'roi_bank_pct', type: 'decimal', precision: 7, scale: 4, nullable: false })
  roiBankPct: string;

  @Column({ name: 'nbfc_lending_ratio_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  nbfcLendingRatioPct: string;

  @Column({ name: 'roi_nbfc_pct', type: 'decimal', precision: 7, scale: 4, nullable: false })
  roiNbfcPct: string;

  @Column({ name: 'apr_blended_rate_pct', type: 'decimal', precision: 7, scale: 4, nullable: false })
  aprBlendedRatePct: string;

  @Column({ name: 'servicing_fee_logic', type: 'varchar', length: 50, nullable: true })
  servicingFeeLogic: string | null;

  @Column({ name: 'servicing_fee_pct', type: 'decimal', precision: 7, scale: 4, nullable: false })
  servicingFeePct: string;

  @Column({ name: 'servicing_fee_basis', type: 'varchar', length: 20, nullable: false })
  servicingFeeBasis: string;

  @Column({ name: 'fee_split_bank_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  feeSplitBankPct: string | null;

  @Column({ name: 'fee_split_nbfc_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  feeSplitNbfcPct: string | null;

  @Column({ name: 'underwriting_ownership', type: 'varchar', length: 60, nullable: true })
  underwritingOwnership: string | null;

  @Column({ name: 'dlg_applicable', type: 'boolean', nullable: true })
  dlgApplicable: boolean | null;

  @Column({ name: 'dlg_provider_name', type: 'varchar', length: 150, nullable: true })
  dlgProviderName: string | null;

  @Column({ name: 'dlg_cap_min_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  dlgCapMinPct: string | null;

  @Column({ name: 'dlg_cap_max_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  dlgCapMaxPct: string | null;

  @Column({ name: 'loss_sharing_bank_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  lossSharingBankPct: string;

  @Column({ name: 'loss_sharing_nbfc_pct', type: 'decimal', precision: 5, scale: 2, nullable: false })
  lossSharingNbfcPct: string;

  @Column({ name: 'escrow_account_number', type: 'varchar', length: 18, nullable: false })
  escrowAccountNumber: string;

  @Column({ name: 'escrow_bank_name', type: 'varchar', length: 100, nullable: false })
  escrowBankName: string;

  @Column({ name: 'escrow_ifsc_code', type: 'char', length: 11, nullable: false })
  escrowIfscCode: string;

  @Column({ name: 'psl_eligible', type: 'boolean', nullable: false })
  pslEligible: boolean;

  @Column({ name: 'psl_sub_category', type: 'varchar', length: 30, nullable: false })
  pslSubCategory: string;

  @Column({ name: 'repayment_collection_agent', type: 'varchar', length: 10, nullable: false })
  repaymentCollectionAgent: string;

  @Column({ name: 'settlement_frequency', type: 'varchar', length: 15, nullable: false })
  settlementFrequency: string;

  @Column({ name: 'grievance_escalation_tat_days', type: 'smallint', nullable: false })
  grievanceEscalationTatDays: number;

  @Column({ name: 'exit_clause_notice_days', type: 'smallint', nullable: true })
  exitClauseNoticeDays: number | null;

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
