import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_branch', schema: 'clm' })
export class ClmBranch {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'branch_id', type: 'varchar', length: 20, nullable: false, unique: true })
  branchId: string;

  @Column({ name: 'partner_code', type: 'varchar', length: 20, nullable: false })
  partnerCode: string;

  @Column({ name: 'branch_name', type: 'varchar', length: 100, nullable: false })
  branchName: string;

  @Column({ name: 'branch_code', type: 'varchar', length: 20, nullable: true, unique: true })
  branchCode: string | null;

  @Column({ name: 'branch_type', type: 'varchar', length: 20, nullable: false })
  branchType: string;

  @Column({ name: 'branch_location', type: 'varchar', length: 100, nullable: false })
  branchLocation: string;

  @Column({ name: 'parent_branch_code', type: 'varchar', length: 20, nullable: true })
  parentBranchCode: string | null;

  @Column({ name: 'branch_address', type: 'varchar', length: 300, nullable: false })
  branchAddress: string;

  @Column({ name: 'branch_status', type: 'varchar', length: 10, nullable: true })
  branchStatus: string | null;

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
