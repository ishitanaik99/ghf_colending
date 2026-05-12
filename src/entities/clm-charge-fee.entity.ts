import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_charge_fee', schema: 'clm' })
export class ClmChargeFee {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'charge_id', type: 'varchar', length: 20, nullable: false, unique: true })
  chargeId: string;

  @Column({ name: 'partner_code', type: 'varchar', length: 20, nullable: false })
  partnerCode: string;

  @Column({ name: 'linked_product_code', type: 'varchar', length: 20, nullable: true })
  linkedProductCode: string | null;

  @Column({ name: 'charge_type', type: 'varchar', length: 50, nullable: false })
  chargeType: string;

  @Column({ name: 'charge_basis', type: 'varchar', length: 15, nullable: false })
  chargeBasis: string;

  @Column({ name: 'charge_value', type: 'decimal', precision: 10, scale: 4, nullable: false })
  chargeValue: string;

  @Column({ name: 'charge_senior_lender_share', type: 'decimal', precision: 10, scale: 4, nullable: true })
  chargeSeniorLenderShare: string | null;

  @Column({ name: 'charge_junior_lender_share', type: 'decimal', precision: 10, scale: 4, nullable: true })
  chargeJuniorLenderShare: string | null;

  @Column({ name: 'included_in_apr_flag', type: 'boolean', nullable: false })
  includedInAprFlag: boolean;

  @Column({ name: 'third_party_payable_flag', type: 'boolean', nullable: false })
  thirdPartyPayableFlag: boolean;

  @Column({ name: 'charge_gst_applicable', type: 'boolean', nullable: true })
  chargeGstApplicable: boolean | null;

  @Column({ name: 'effective_from_date', type: 'date', nullable: true })
  effectiveFromDate: Date | null;

  @Column({ name: 'effective_to_date', type: 'date', nullable: true })
  effectiveToDate: Date | null;

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
