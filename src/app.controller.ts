import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller('')
export class AppController {
  @Get()
  @ApiOperation({
    description: 'App controller',
  })
  helcome(): string {
    return 'Welcome to Admin Tool API!';
  }
}
