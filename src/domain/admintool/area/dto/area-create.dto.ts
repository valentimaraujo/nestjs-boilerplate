import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class AreaCreateDto {
  @ApiProperty({
    example: 'Minha Área',
  })
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  areaName: string;

  @ApiProperty({
    example: 'test1@example.com',
  })
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase().trim())
  email: string;

  @ApiProperty({
    example: 'aa1c04e8-5819-4c52-876d-c36c316cacfa',
  })
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  responsibleId: string;
}
