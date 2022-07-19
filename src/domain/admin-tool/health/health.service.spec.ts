import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from '@admin-tool/health/health.service';

describe('HealthService', () => {
  let healthService: HealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthService],
    }).compile();

    healthService = module.get<HealthService>(HealthService);
  });

  describe('Health Check', () => {
    it('Check health is OK', async () => {
      const existingResult = 'OK';
      const result = healthService.sendOk();
      expect(result).toBe(existingResult);
    });
  });
});
