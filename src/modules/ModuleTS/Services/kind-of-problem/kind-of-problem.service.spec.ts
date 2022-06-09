import { Test, TestingModule } from '@nestjs/testing';
import { KindOfProblemService } from './kind-of-problem.service';

describe('KindOfProblemService', () => {
  let service: KindOfProblemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KindOfProblemService],
    }).compile();

    service = module.get<KindOfProblemService>(KindOfProblemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
