import { Module } from '@nestjs/common';

import { AreaController } from '@admintool/area/area.controller';
import { AreaService } from '@admintool/area/area.service';
import { DynamoDBDataMapper } from '@shared/dynamodb-data-mapper';

@Module({
  controllers: [AreaController],
  providers: [AreaService, DynamoDBDataMapper],
})
export class AreaModule {}
