import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

import { AuthController } from '@admintool/auth/auth.controller';
import { AuthService } from '@admintool/auth/auth.service';
import { AuthJwtStrategy } from '@admintool/auth/auth-jwt.strategy';

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
