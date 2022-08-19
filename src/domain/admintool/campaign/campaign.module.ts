import { Module } from '@nestjs/common';

import { CampaignController } from '@admintool/campaign/campaign.controller';
import { CampaignService } from '@admintool/campaign/campaign.service';
import { DynamoDBDataMapper } from '@shared/dynamodb-data-mapper';

@Module({
  controllers: [CampaignController],
  providers: [CampaignService, DynamoDBDataMapper],
})
export class CampaignModule {}
