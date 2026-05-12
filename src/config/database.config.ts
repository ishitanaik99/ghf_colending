import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserAuth } from '../entities/user-auth.entity';
import { Partners } from '../entities/partners.entity';
import { ClaMaster } from '../entities/cla-master.entity';
import { PartnerOnboardingMaster } from '../entities/partner-onboarding-master.entity';
import { ProductConfigMaster } from '../entities/product-config-master.entity';

export default registerAs('database', (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  schema: process.env.DB_SCHEMA,
  entities: [
    UserAuth,
    Partners,
    ClaMaster,
    PartnerOnboardingMaster,
    ProductConfigMaster,
  ],
  synchronize: false,   // NEVER true in production — DB schema is managed externally
  logging: false,
  ssl: false,           // Set to true if your PostgreSQL server requires SSL
}));