import { Injectable } from '@nestjs/common';
import { DynamoDBDataMapper } from '@shared/dynamodb-data-mapper';
import { ChannelSchema } from '@admin-tool/channel/channel.schema';

@Injectable()
export class ChannelService {
  constructor(private readonly dynamoDB: DynamoDBDataMapper) {}

  async createChannel() {
    return this.dynamoDB.mapper
      .put(
        Object.assign(new ChannelSchema(), {
          id: '2217091237901327017392',
          completed: 'completed',
        }),
      )
      .then((channel) => {
        return Object.assign(new ChannelSchema(), {
          ...channel,
        });
      })
      .catch((err) => console.log(err));
  }
}
