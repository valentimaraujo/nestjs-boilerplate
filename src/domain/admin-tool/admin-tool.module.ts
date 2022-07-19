import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { HealthModule } from '@admin-tool/health/health.module';

const DOMAIN_PREFIX = 'admintool';

@Module({
  imports: [
    HealthModule,
    RouterModule.register([
      {
        path: DOMAIN_PREFIX,
        module: HealthModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AdminToolModule {}
