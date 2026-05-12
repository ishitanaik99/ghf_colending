import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { Partners } from './partners.entity';

@Entity({ name: 'user_auth', schema: 'ghf_colending' })
export class UserAuth {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Exposed as read-only scalar; actual FK is managed via the relation below
  @Column({ name: 'user_id', type: 'bigint', nullable: false, unique: true, insert: false, update: false })
  userId: number;

  @ManyToOne(() => Partners, { eager: false, nullable: false })
  @JoinColumn({ name: 'user_id' })
  partner: Partners;

  @Column({ name: 'email', type: 'varchar', length: 255, nullable: false, unique: true })
  email: string;

  @Column({ name: 'password_hash', type: 'varchar', length: 255, nullable: false })
  passwordHash: string;

  @Column({ name: 'otp_hash', type: 'varchar', length: 255, nullable: true })
  otpHash: string | null;

  @Column({ name: 'otp_expiry', type: 'timestamptz', nullable: true })
  otpExpiry: Date | null;

  @Column({ name: 'otp_attempts', type: 'smallint', nullable: false, default: 0 })
  otpAttempts: number;

  @Column({ name: 'refresh_token_hash', type: 'varchar', length: 255, nullable: true })
  refreshTokenHash: string | null;

  @Column({ name: 'is_verified', type: 'boolean', nullable: false, default: false })
  isVerified: boolean;

  @Column({ name: 'is_active', type: 'boolean', nullable: false, default: true })
  isActive: boolean;

  @Column({ name: 'last_login_at', type: 'timestamptz', nullable: true })
  lastLoginAt: Date | null;

  @Column({ name: 'created_at', type: 'timestamptz', nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamptz', nullable: false })
  updatedAt: Date;

  @BeforeInsert()
  setCreatedAt() {
    const now = new Date();
    this.createdAt = now;
    this.updatedAt = now;
  }

  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = new Date();
  }
}