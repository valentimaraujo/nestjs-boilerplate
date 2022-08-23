import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DynamoDBDataMapper } from '@shared/dynamodb-data-mapper';
import { AreaSchema } from '@admintool/area/area.schema';
import { AreaCreateDto } from '@admintool/area/dto/area-create.dto';
import { uuidGenerate } from '@util/uuid-generate.util';
import { SubAreaCreateDto } from '@admintool/area/dto/sub-area-create.dto';
import { ProductCreateDto } from '@admintool/area/dto/product-create.dto';

@Injectable()
export class AreaService {
  constructor(private readonly dynamoDB: DynamoDBDataMapper) {
    //
  }

  async createArea(areaDto: AreaCreateDto): Promise<AreaSchema> {
    return this.dynamoDB.mapper
      .put(
        Object.assign(new AreaSchema(), {
          id: uuidGenerate(),
          name: areaDto.name,
          email: areaDto.email,
          responsibleId: areaDto.responsibleId,
        }),
      )
      .then((area) => {
        return Object.assign(new AreaSchema(), {
          ...area,
        });
      })
      .catch((err) => {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      });
  }

  async createSubArea(subAreaDto: SubAreaCreateDto): Promise<AreaSchema> {
    return this.dynamoDB.mapper
      .put(
        Object.assign(new AreaSchema(), {
          id: uuidGenerate(),
          name: subAreaDto.name,
          email: subAreaDto.email,
          areaId: subAreaDto.areaId,
          responsibleId: subAreaDto.responsibleId,
        }),
      )
      .then((subArea) => {
        return Object.assign(new AreaSchema(), {
          ...subArea,
        });
      })
      .catch((err) => {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      });
  }

  async createProduto(productDto: ProductCreateDto): Promise<AreaSchema> {
    return this.dynamoDB.mapper
      .put(
        Object.assign(new AreaSchema(), {
          id: uuidGenerate(),
          name: productDto.name,
          email: productDto.email,
          areaId: productDto.areaId,
          subAreaId: productDto.subAreaId,
          responsibleId: productDto.responsibleId,
        }),
      )
      .then((product) => {
        return Object.assign(new AreaSchema(), {
          ...product,
        });
      })
      .catch((err) => {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      });
  }

  async listAreas(): Promise<AreaSchema[]> {
    try {
      const items = [];
      // eslint-disable-next-line no-restricted-syntax
      for await (const record of this.dynamoDB.mapper.scan(AreaSchema)) {
        items.push(Object.assign(new AreaSchema(), record));
      }
      return items;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
