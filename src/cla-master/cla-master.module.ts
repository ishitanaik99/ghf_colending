import { Module } from '@nestjs/common';
import { ClaMasterController } from './cla-master.controller';
import { ClaMasterService } from './cla-master.service';

@Module({
  controllers: [ClaMasterController],
  providers: [ClaMasterService]
})
export class ClaMasterModule {}
