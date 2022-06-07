import { Test, TestingModule } from '@nestjs/testing';
import { KindOfCargoService } from './kind-of-cargo.service';

describe('KindOfCargoService', () => {
  let service: KindOfCargoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KindOfCargoService],
    }).compile();

    service = module.get<KindOfCargoService>(KindOfCargoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
