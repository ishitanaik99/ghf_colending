import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_partner_bank_account', schema: 'clm' })
export class ClmPartnerBankAccount {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'bank_acct_id', type: 'varchar', length: 20, nullable: false, unique: true })
  bankAcctId: string;

  @Column({ name: 'partner_code', type: 'varchar', length: 20, nullable: false })
  partnerCode: string;

  @Column({ name: 'bank_account_title', type: 'varchar', length: 100, nullable: false })
  bankAccountTitle: string;

  @Column({ name: 'bank_account_number', type: 'varchar', length: 20, nullable: false })
  bankAccountNumber: string;

  @Column({ name: 'bank_ifsc_code', type: 'char', length: 11, nullable: false })
  bankIfscCode: string;

  @Column({ name: 'bank_name', type: 'varchar', length: 100, nullable: false })
  bankName: string;

  @Column({ name: 'bank_account_type', type: 'varchar', length: 20, nullable: false })
  bankAccountType: string;

  @Column({ name: 'penny_drop_verified', type: 'boolean', nullable: true })
  pennyDropVerified: boolean | null;

  @Column({ name: 'is_primary', type: 'boolean', nullable: true })
  isPrimary: boolean | null;

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
