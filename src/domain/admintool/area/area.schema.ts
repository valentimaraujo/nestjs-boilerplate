import {
  attribute,
  rangeKey,
  table,
} from '@aws/dynamodb-data-mapper-annotations';

@table('areas')
export class AreaSchema {
  @attribute()
  id: string;

  @attribute()
  name: string;

  @attribute()
  email: string;

  @attribute()
  responsibleId: string;

  @attribute()
  areaId: string;

  @attribute()
  subAreaId: string;

  @rangeKey({
    defaultProvider: () => new Date(),
  })
  createdAt: Date;
}
