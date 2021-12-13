import { Test, TestingModule } from '@nestjs/testing';
import { PlazoController } from './plazo.controller';
import { PlazoService } from './plazo.service';

describe('PlazoController', () => {
  let controller: PlazoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlazoController],
      providers: [PlazoService],
    }).compile();

    controller = module.get<PlazoController>(PlazoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
