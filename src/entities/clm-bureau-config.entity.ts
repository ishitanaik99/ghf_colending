import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_bureau_config', schema: 'clm' })
export class ClmBureauConfig {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'bureau_config_id', type: 'varchar', length: 20, nullable: false, unique: true })
  bureauConfigId: string;

  @Column({ name: 'partner_code', type: 'varchar', length: 20, nullable: false })
  partnerCode: string;

  @Column({ name: 'bureau_name', type: 'varchar', length: 20, nullable: false })
  bureauName: string;

  @Column({ name: 'bureau_member_code', type: 'varchar', length: 30, nullable: false })
  bureauMemberCode: string;

  @Column({ name: 'bureau_member_shortname', type: 'varchar', length: 30, nullable: false })
  bureauMemberShortname: string;

  @Column({ name: 'bureau_active_flag', type: 'boolean', nullable: true })
  bureauActiveFlag: boolean | null;

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
