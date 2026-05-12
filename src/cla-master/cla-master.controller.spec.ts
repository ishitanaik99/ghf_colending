import { Test, TestingModule } from '@nestjs/testing';
import { ClaMasterController } from './cla-master.controller';

describe('ClaMasterController', () => {
  let controller: ClaMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClaMasterController],
    }).compile();

    controller = module.get<ClaMasterController>(ClaMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
