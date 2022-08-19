import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';
import { Transform } from 'class-transformer';

export class AuthRegisterDto {
  @ApiProperty({
    example: 'test1@example.com',
  })
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase().trim())
  email: string;

  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-\"!@#%&\/,><\':;|_~`])\S{8,99}$/, {
    message: 'Password did not conform with policy: Password must have uppercase characters',
  })
  @ApiProperty({
    example: 'userpass',
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'John Doe',
  })
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  name: string;
}
