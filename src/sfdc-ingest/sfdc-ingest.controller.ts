import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { SfdcIngestService } from './sfdc-ingest.service';
import { SfdcIngestRequestDto } from './dto/sfdc-ingest-request.dto';
import { SfdcIngestResponseDto } from './dto/sfdc-ingest-response.dto';

@Controller('sfdc')
export class SfdcIngestController {
  constructor(private readonly sfdcIngestService: SfdcIngestService) {}

  @Post('ingest')
  @HttpCode(HttpStatus.OK)
  async ingest(@Body() dto: SfdcIngestRequestDto): Promise<SfdcIngestResponseDto> {
    return this.sfdcIngestService.ingest(dto);
  }
}
