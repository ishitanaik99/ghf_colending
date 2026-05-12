import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clm_url_whitelist', schema: 'clm' })
export class ClmUrlWhitelist {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'url_id', type: 'varchar', length: 20, nullable: false, unique: true })
  urlId: string;

  @Column({ name: 'partner_code', type: 'varchar', length: 20, nullable: false })
  partnerCode: string;

  @Column({ name: 'whitelisted_url', type: 'varchar', length: 500, nullable: false })
  whitelistedUrl: string;

  @Column({ name: 'url_purpose', type: 'varchar', length: 50, nullable: true })
  urlPurpose: string | null;

  @Column({ name: 'is_active', type: 'boolean', nullable: true })
  isActive: boolean | null;

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
