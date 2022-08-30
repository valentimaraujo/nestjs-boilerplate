import {
  IsArray,
  IsBoolean,
  IsDefined,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Transform } from 'class-transformer';

export enum MethodEnum {
  Lambda = 'lambda',
  Mailing = 'mailing',
  WithoutProgramming = 'without-programming',
}

export enum TypeEnum {
  Ecommerce = 'ecommerce',
  Salesdeck = 'salesdeck',
}

export class CreateCampaignDto {
  @IsNotEmpty()
  @IsBoolean()
  ativo: boolean;

  @IsOptional()
  @IsArray()
  canal: [string];

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toUpperCase())
  codCampanha: string;

  @IsOptional()
  @IsString()
  defaultUrlRedirect: string;

  @IsOptional()
  @IsString()
  defaultMetaData: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  emailResponsavel: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  prioridade: number;

  @IsOptional()
  @IsString()
  textoPrincipal: string;

  @IsOptional()
  @IsString()
  textoSecundario: string;

  @IsOptional()
  @IsString()
  nomeIcone: string;

  @IsOptional()
  @IsString()
  pathImagemS3: string;

  @IsOptional()
  @IsString()
  nomeLambda: string;

  @IsOptional()
  @IsString()
  lambdaMensagens: string;

  @IsDefined()
  @IsEnum(MethodEnum)
  metodo: string;

  @IsDefined()
  @IsEnum(TypeEnum)
  tipo: string;

  @IsNotEmpty()
  dtVigenciaFim: Date;

  @IsNotEmpty()
  dtVigenciaIni: Date;
}
