import { Module } from '@nestjs/common';

import { ChannelController } from '@admin-tool/channel/channel.controller';
import { ChannelService } from '@admin-tool/channel/channel.service';
import { DynamoDBDataMapper } from '@shared/dynamodb-data-mapper';

@Module({
  controllers: [ChannelController],
  providers: [ChannelService, DynamoDBDataMapper],
})
export class ChannelModule {}
