import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AreaService } from '@admintool/area/area.service';
import { AreaCreateDto } from '@admintool/area/dto/area-create.dto';
import { AreaSchema } from '@admintool/area/area.schema';
import { AuthGuard } from '@nestjs/passport';
import { SubAreaCreateDto } from '@admintool/area/dto/sub-area-create.dto';
import { ProductCreateDto } from '@admintool/area/dto/product-create.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('area')
export class AreaController {
  constructor(private readonly service: AreaService) {}

  @Post('')
  @HttpCode(HttpStatus.OK)
  public async createArea(@Body() areaDto: AreaCreateDto): Promise<AreaSchema> {
    return this.service.createArea(areaDto);
  }

  @Post('/subarea')
  @HttpCode(HttpStatus.OK)
  public async createSubArea(
    @Body() subAreaDto: SubAreaCreateDto,
  ): Promise<AreaSchema> {
    return this.service.createSubArea(subAreaDto);
  }

  @Post('/product')
  @HttpCode(HttpStatus.OK)
  public async createProduto(
    @Body() productDto: ProductCreateDto,
  ): Promise<AreaSchema> {
    return this.service.createProduto(productDto);
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  public async listAreas(): Promise<AreaSchema[]> {
    return this.service.listAreas();
  }
}
