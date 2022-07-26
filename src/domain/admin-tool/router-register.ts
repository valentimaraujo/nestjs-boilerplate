import { AuthModule } from '@admin-tool/auth/auth.module';
import { ChannelModule } from '@admin-tool/channel/channel.module';
import { HealthModule } from '@admin-tool/health/health.module';

const DOMAIN_PREFIX = 'admintool';

export const RouterRegister = [
  {
    path: DOMAIN_PREFIX,
    module: AuthModule,
  },
  {
    path: DOMAIN_PREFIX,
    module: ChannelModule,
  },
  {
    path: DOMAIN_PREFIX,
    module: HealthModule,
  },
];
