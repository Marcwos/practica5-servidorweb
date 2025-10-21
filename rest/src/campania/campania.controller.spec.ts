import { Test, TestingModule } from '@nestjs/testing';
import { CampaniaController } from './campania.controller';
import { CampaniaService } from './campania.service';

describe('CampaniaController', () => {
  let controller: CampaniaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampaniaController],
      providers: [CampaniaService],
    }).compile();

    controller = module.get<CampaniaController>(CampaniaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
