import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

import { AuthController } from '@admin-tool/auth/auth.controller';
import { AuthService } from '@admin-tool/auth/auth.service';
import { AuthJwtStrategy } from '@admin-tool/auth/auth-jwt.strategy';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthJwtStrategy,
    ConfigService,
    {
      provide: 'ConfigService',
      useClass: ConfigService,
    },
  ],
})
export class AuthModule {}
