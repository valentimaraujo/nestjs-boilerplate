import { attribute, rangeKey, table } from '@aws/dynamodb-data-mapper-annotations';

@table('channels')
export class ChannelSchema {
  @attribute()
  id: string;

  @rangeKey({
    defaultProvider: () => new Date(),
  })
  createdAt: Date;

  @attribute()
  completed: string;
}
