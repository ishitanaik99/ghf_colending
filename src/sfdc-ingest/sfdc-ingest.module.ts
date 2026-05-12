import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClmLoanApplication } from '../entities/clm-loan-application.entity';
import { ClmIndividualCustomer } from '../entities/clm-individual-customer.entity';
import { ClmCoApplicant } from '../entities/clm-co-applicant.entity';
import { ClmEntityCustomer } from '../entities/clm-entity-customer.entity';
import { ClmCollateral } from '../entities/clm-collateral.entity';
import { ClmDisbursement } from '../entities/clm-disbursement.entity';
import { ClmDocument } from '../entities/clm-document.entity';

import { SfdcIngestController } from './sfdc-ingest.controller';
import { SfdcIngestService } from './sfdc-ingest.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ClmLoanApplication,
      ClmIndividualCustomer,
      ClmCoApplicant,
      ClmEntityCustomer,
      ClmCollateral,
      ClmDisbursement,
      ClmDocument,
    ]),
  ],
  controllers: [SfdcIngestController],
  providers: [SfdcIngestService],
})
export class SfdcIngestModule {}
