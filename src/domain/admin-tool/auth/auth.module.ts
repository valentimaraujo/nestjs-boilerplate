import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from '@admin-tool/auth/auth.controller';
import { AuthService } from '@admin-tool/auth/auth.service';
import { AuthJwtStrategy } from '@admin-tool/auth/auth-jwt.strategy';
import { CognitoConfig } from '@config/cognito.config';

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
    CognitoConfig,
    {
      provide: 'CognitoConfig',
      useClass: CognitoConfig,
    },
  ],
})
export class AuthModule {}
