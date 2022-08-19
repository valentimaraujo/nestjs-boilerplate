import { Body, Controller, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';

import { AuthService } from '@admintool/auth/auth.service';
import { AuthAuthenticationDto } from '@admintool/auth/dto/auth-authentication.dto';
import { AuthRegisterDto } from '@admintool/auth/dto/auth-register.dto';

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
    try {
      const response = await this.service.authenticateUser(userDto);
      if (response) {
        return response;
      }
      throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED);
    } catch (e) {
      throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }
}
