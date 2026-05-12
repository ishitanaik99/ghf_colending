import {
  Entity,
  Column,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'partners', schema: 'ghf_colending' })
export class Partners {
  // No auto-generate — ID is managed externally (matches Spring Boot @Id without @GeneratedValue)
  @PrimaryColumn({ name: 'id', type: 'bigint', nullable: false })
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ name: 'code', type: 'varchar', length: 50, nullable: false, unique: true })
  code: string;

  @Column({ name: 'type', type: 'varchar', length: 100, nullable: false })
  type: string;

  @Column({ name: 'status', type: 'varchar', length: 50, nullable: true })
  status: string | null;

  @Column({ name: 'contact_person', type: 'varchar', length: 255, nullable: true })
  contactPerson: string | null;

  @Column({ name: 'contact_email', type: 'varchar', length: 255, nullable: true })
  contactEmail: string | null;

  @Column({ name: 'contact_phone', type: 'varchar', length: 20, nullable: true })
  contactPhone: string | null;

  @Column({ name: 'address', type: 'text', nullable: true })
  address: string | null;

  @Column({ name: 'pan', type: 'varchar', length: 20, nullable: true })
  pan: string | null;

  @Column({ name: 'gstin', type: 'varchar', length: 20, nullable: true })
  gstin: string | null;

  @Column({ name: 'agreement_date', type: 'date', nullable: true })
  agreementDate: Date | null;

  @Column({ name: 'expiry_date', type: 'date', nullable: true })
  expiryDate: Date | null;

  @Column({ name: 'credit_limit', type: 'decimal', precision: 15, scale: 2, nullable: true })
  creditLimit: string | null; // TypeORM returns decimal as string; cast to number in service if needed

  @Column({ name: 'utilised_limit', type: 'decimal', precision: 15, scale: 2, nullable: true })
  utilisedLimit: string | null;

  @Column({ name: 'created_at', type: 'timestamptz', nullable: true })
  createdAt: Date | null;

  @Column({ name: 'updated_at', type: 'timestamptz', nullable: true })
  updatedAt: Date | null;
}