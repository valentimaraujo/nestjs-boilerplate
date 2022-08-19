import { Controller, Get, UseGuards } from '@nestjs/common';
import { HealthCheck, HealthCheckResult } from '@nestjs/terminus';
import { ApiOperation } from '@nestjs/swagger';
import { HealthService } from '@admintool/health/health.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('health')
@UseGuards(AuthGuard('jwt'))
export class HealthController {
  constructor(private health: HealthService) {}

  @Get()
  @ApiOperation({
    description: 'health check',
  })
  @HealthCheck()
  check(): Promise<HealthCheckResult> {
    return this.health.check();
  }
}
