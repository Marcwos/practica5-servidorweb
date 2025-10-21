import { Test, TestingModule } from '@nestjs/testing';
import { CampaniaService } from './campania.service';

describe('CampaniaService', () => {
  let service: CampaniaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaniaService],
    }).compile();

    service = module.get<CampaniaService>(CampaniaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
