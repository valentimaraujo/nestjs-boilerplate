import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { HealthController } from '@admintool/health/health.controller';
import { HealthService } from '@admintool/health/health.service';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
