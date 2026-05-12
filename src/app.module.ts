import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import appConfig from './config/app.config';

import { UserAuth } from './entities/user-auth.entity';
import { Partners } from './entities/partners.entity';
import { ClaMaster } from './entities/cla-master.entity';
import { PartnerOnboardingMaster } from './entities/partner-onboarding-master.entity';
import { ProductConfigMaster } from './entities/product-config-master.entity';

import { ClmLoanApplication } from './entities/clm-loan-application.entity';
import { ClmIndividualCustomer } from './entities/clm-individual-customer.entity';
import { ClmCoApplicant } from './entities/clm-co-applicant.entity';
import { ClmEntityCustomer } from './entities/clm-entity-customer.entity';
import { ClmCollateral } from './entities/clm-collateral.entity';
import { ClmDisbursement } from './entities/clm-disbursement.entity';
import { ClmDocument } from './entities/clm-document.entity';
import { ClmBankDecision } from './entities/clm-bank-decision.entity';

import { AuthModule } from './auth/auth.module';
import { SfdcIngestModule } from './sfdc-ingest/sfdc-ingest.module';
// import { ClaMasterModule } from './cla-master/cla-master.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, jwtConfig, appConfig],
      envFilePath: '.env',
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        database: configService.get<string>('database.database'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        schema: configService.get<string>('database.schema'),
        entities: [
          UserAuth,
          Partners,
          ClaMaster,
          PartnerOnboardingMaster,
          ProductConfigMaster,
          ClmLoanApplication,
          ClmIndividualCustomer,
          ClmCoApplicant,
          ClmEntityCustomer,
          ClmCollateral,
          ClmDisbursement,
          ClmDocument,
          ClmBankDecision,
        ],
        synchronize: false,
        logging: false,
      }),
    }),

    AuthModule,
    SfdcIngestModule,
    // ClaMasterModule,
  ],
})
export class AppModule {}