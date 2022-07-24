import { Inject, Injectable } from '@nestjs/common';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

import { AuthAuthenticationDto } from '@admin-tool/auth/dto/auth-authentication.dto';
import { CognitoConfig } from '@config/cognito.config';
import { AuthRegisterDto } from '@admin-tool/auth/dto/auth-register.dto';

@Injectable()
@Injectable()
export class AuthService {
  private readonly userPool: CognitoUserPool;

  constructor(
    @Inject('CognitoConfig')
    private readonly authConfig: CognitoConfig,
  ) {
    this.userPool = new CognitoUserPool({
      UserPoolId: this.authConfig.userPoolId,
      ClientId: this.authConfig.clientId,
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

  authenticateUser(userDto: AuthAuthenticationDto) {
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
          resolve({
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
