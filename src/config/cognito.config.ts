import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CognitoConfig {
  public userPoolId: string;
  public clientId: string;
  public clientSecret: string;
  public region: string;
  public authority;

  constructor(private configService: ConfigService) {
    const cognitoConfig = configService.get('cognito');

    this.userPoolId = cognitoConfig.userPoolId;
    this.clientId = cognitoConfig.clientId;
    this.clientSecret = cognitoConfig.clientSecret;
    this.region = cognitoConfig.region;
    this.authority = cognitoConfig.authority;
  }
}
