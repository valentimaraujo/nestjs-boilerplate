import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { HealthModule } from '@admintool/health/health.module';
import { CampaignModule } from '@admintool/campaign/campaign.module';
import { AreaModule } from '@admintool/area/area.module';
import { AuthModule } from '@admintool/auth/auth.module';
import { RouterRegister } from '@admintool/router-register';

@Module({
  imports: [AuthModule, CampaignModule, AreaModule, HealthModule, RouterModule.register(RouterRegister)],
})
export class AdminToolModule {}
