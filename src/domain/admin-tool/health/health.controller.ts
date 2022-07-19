import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckResult } from '@nestjs/terminus';
import { ApiOperation } from '@nestjs/swagger';
import { HealthService } from '@admin-tool/health/health.service';

@Controller('health')
export class HealthController {
  constructor(private health: HealthService) {}

  @Get()
  @ApiOperation({ description: 'health check' })
  @HealthCheck()
  check(): Promise<HealthCheckResult> {
    return this.health.check();
  }
}
