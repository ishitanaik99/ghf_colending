import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_user', schema: 'clm' })
export class ClmUser {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'user_id', type: 'varchar', length: 20, nullable: false, unique: true })
  userId: string;

  @Column({ name: 'partner_code', type: 'varchar', length: 20, nullable: false })
  partnerCode: string;

  @Column({ name: 'user_first_name', type: 'varchar', length: 50, nullable: false })
  userFirstName: string;

  @Column({ name: 'user_middle_name', type: 'varchar', length: 50, nullable: true })
  userMiddleName: string | null;

  @Column({ name: 'user_last_name', type: 'varchar', length: 50, nullable: false })
  userLastName: string;

  @Column({ name: 'user_branch_code', type: 'varchar', length: 20, nullable: false })
  userBranchCode: string;

  @Column({ name: 'employee_code', type: 'varchar', length: 30, nullable: false })
  employeeCode: string;

  @Column({ name: 'user_email', type: 'varchar', length: 100, nullable: false })
  userEmail: string;

  @Column({ name: 'user_mobile', type: 'char', length: 10, nullable: false })
  userMobile: string;

  @Column({ name: 'user_role', type: 'varchar', length: 30, nullable: false })
  userRole: string;

  @Column({ name: 'user_status', type: 'varchar', length: 10, nullable: true })
  userStatus: string | null;

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
