import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AdminToolModule } from '@admin-tool/admin-tool.module';
import { config } from '@config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    AdminToolModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
