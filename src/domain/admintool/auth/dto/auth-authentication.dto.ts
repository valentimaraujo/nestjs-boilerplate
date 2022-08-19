import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class AuthAuthenticationDto {
  @ApiProperty({
    example: 'test1@example.com',
  })
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase().trim())
  email: string;

  @ApiProperty({
    example: 'userpass',
  })
  @IsNotEmpty()
  password: string;
}
