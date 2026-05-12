import { Test, TestingModule } from '@nestjs/testing';
import { ClaMasterService } from './cla-master.service';

describe('ClaMasterService', () => {
  let service: ClaMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClaMasterService],
    }).compile();

    service = module.get<ClaMasterService>(ClaMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
