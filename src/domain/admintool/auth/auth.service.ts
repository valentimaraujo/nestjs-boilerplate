import { Inject, Injectable } from '@nestjs/common';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

import { AuthAuthenticationDto } from '@admintool/auth/dto/auth-authentication.dto';
import { AuthRegisterDto } from '@admintool/auth/dto/auth-register.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly userPool: CognitoUserPool;

  constructor(
    @Inject('ConfigService')
    private readonly authConfig: ConfigService,
  ) {
    const config = this.authConfig.get('cognito');
    this.userPool = new CognitoUserPool({
      UserPoolId: config.userPoolId,
      ClientId: config.clientId,
    });
  }

  async registerUser(userDto: AuthRegisterDto) {
    const { name, email, password } = userDto;
    return new Promise((resolve, reject) => {
      return this.userPool.signUp(
        email,
        password,
        [
          new CognitoUserAttribute({
            Name: 'email',
            Value: email,
          }),
          new CognitoUserAttribute({
            Name: 'name',
            Value: name,
          }),
          new CognitoUserAttribute({
            Name: 'middle_name',
            Value: '',
          }),
        ],
        null,
        (err, result) => {
          if (!result) {
            reject(err);
          } else {
            resolve(result.user);
          }
        },
      );
    });
  }

  async authenticateUser(userDto: AuthAuthenticationDto) {
    const { email, password } = userDto;

    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    const userData = {
      Username: email,
      Pool: this.userPool,
    };

    const newUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      return newUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          const token = result.getIdToken();
          const { payload } = token;
          resolve({
            id: payload.sub,
            name: payload.name,
            email: payload.email,
            token: result.getIdToken().getJwtToken(),
          });
        },
        onFailure: (error) => {
          reject(error);
        },
      });
    });
  }
}
