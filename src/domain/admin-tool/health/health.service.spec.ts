import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from '@admin-tool/health/health.service';
import { TerminusModule } from '@nestjs/terminus';

describe('HealthService', () => {
  let healthService: HealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TerminusModule],
      providers: [HealthService],
    }).compile();

    healthService = module.get<HealthService>(HealthService);
  });

  describe('Health Check', () => {
    it('Check healthOK', async () => {
      const result = await healthService.check();
      expect(result).toEqual({
        status: 'ok',
        info: {},
        error: {},
        details: {},
      });
    });
  });
});
