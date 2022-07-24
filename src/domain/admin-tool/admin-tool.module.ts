import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { HealthModule } from '@admin-tool/health/health.module';
import { AuthModule } from '@admin-tool/auth/auth.module';

const DOMAIN_PREFIX = 'admintool';

@Module({
  imports: [
    AuthModule,
    HealthModule,
    RouterModule.register([
      {
        path: DOMAIN_PREFIX,
        module: AuthModule,
      },
      {
        path: DOMAIN_PREFIX,
        module: HealthModule,
      },
    ]),
  ],
})
export class AdminToolModule {}
