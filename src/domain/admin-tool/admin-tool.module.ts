import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { HealthModule } from '@admin-tool/health/health.module';
import { ChannelModule } from '@admin-tool/channel/channel.module';
import { AuthModule } from '@admin-tool/auth/auth.module';
import { RouterRegister } from '@admin-tool/router-register';

@Module({
  imports: [AuthModule, ChannelModule, HealthModule, RouterModule.register(RouterRegister)],
})
export class AdminToolModule {}
