import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { HealthController } from '@admin-tool/health/health.controller';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [],
})
export class HealthModule {}
