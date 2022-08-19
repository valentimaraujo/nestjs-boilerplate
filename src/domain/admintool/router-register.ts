import { AuthModule } from '@admintool/auth/auth.module';
import { CampaignModule } from '@admintool/campaign/campaign.module';
import { AreaModule } from '@admintool/area/area.module';
import { HealthModule } from '@admintool/health/health.module';

const DOMAIN_PREFIX = 'admintool';

export const RouterRegister = [
  {
    path: DOMAIN_PREFIX,
    module: AreaModule,
  },
  {
    path: DOMAIN_PREFIX,
    module: AuthModule,
  },
  {
    path: DOMAIN_PREFIX,
    module: CampaignModule,
  },
  {
    path: DOMAIN_PREFIX,
    module: HealthModule,
  },
];
