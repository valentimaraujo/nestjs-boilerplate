import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { AuthService } from '@admin-tool/auth/auth.service';
import { AuthAuthenticationDto } from '@admin-tool/auth/dto/auth-authentication.dto';
import { AuthRegisterDto } from '@admin-tool/auth/dto/auth-register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.OK)
  public async register(@Body() userDto: AuthRegisterDto) {
    return this.service.registerUser(userDto);
  }

  @Post('authetication')
  @HttpCode(HttpStatus.OK)
  public async authenticateUser(@Body() userDto: AuthAuthenticationDto) {
    return this.service.authenticateUser(userDto);
  }
}
