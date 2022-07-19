import { Module } from '@nestjs/common';

import { AdminToolModule } from '@admin-tool/admin-tool.module';

@Module({
  imports: [AdminToolModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
