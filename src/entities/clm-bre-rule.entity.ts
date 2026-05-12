import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_bre_rule', schema: 'clm' })
export class ClmBreRule {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'rule_id', type: 'varchar', length: 15, nullable: true, unique: true })
  ruleId: string | null;

  @Column({ name: 'rule_name', type: 'varchar', length: 100, nullable: true })
  ruleName: string | null;

  @Column({ name: 'rule_category', type: 'varchar', length: 20, nullable: true })
  ruleCategory: string | null;

  @Column({ name: 'rule_type', type: 'varchar', length: 20, nullable: true })
  ruleType: string | null;

  @Column({ name: 'rule_expression_drl', type: 'text', nullable: true })
  ruleExpressionDrl: string | null;

  @Column({ name: 'decision_code', type: 'varchar', length: 20, nullable: false })
  decisionCode: string;

  @Column({ name: 'decision_reason', type: 'varchar', length: 500, nullable: false })
  decisionReason: string;

  @Column({ name: 'applicable_product_codes', type: 'varchar', length: 500, nullable: true })
  applicableProductCodes: string | null;

  @Column({ name: 'applicable_partner_codes', type: 'varchar', length: 500, nullable: true })
  applicablePartnerCodes: string | null;

  @Column({ name: 'execution_priority', type: 'smallint', nullable: true })
  executionPriority: number | null;

  @Column({ name: 'effective_from_date', type: 'date', nullable: true })
  effectiveFromDate: Date | null;

  @Column({ name: 'effective_to_date', type: 'date', nullable: true })
  effectiveToDate: Date | null;

  @Column({ name: 'rule_version', type: 'varchar', length: 10, nullable: true })
  ruleVersion: string | null;

  @Column({ name: 'approved_by_user_id', type: 'varchar', length: 50, nullable: false })
  approvedByUserId: string;

  @Column({ name: 'approved_by_name', type: 'varchar', length: 150, nullable: false })
  approvedByName: string;

  @Column({ name: 'approved_on_date', type: 'date', nullable: false })
  approvedOnDate: Date;

  @Column({ name: 'override_allowed', type: 'boolean', nullable: true })
  overrideAllowed: boolean | null;

  @Column({ name: 'override_level', type: 'varchar', length: 20, nullable: true })
  overrideLevel: string | null;

  @Column({ name: 'ab_test_split_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  abTestSplitPct: string | null;

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
