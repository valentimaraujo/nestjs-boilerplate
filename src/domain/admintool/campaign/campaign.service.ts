import { Injectable } from '@nestjs/common';
import { DynamoDBDataMapper } from '@shared/dynamodb-data-mapper';
import { v4 as uuidv4 } from 'uuid';

import { CampaignSchema } from '@admintool/campaign/campaign.schema';
import { CreateCampaignDto } from '@admintool/campaign/dto/create-campaign.dto';

@Injectable()
export class CampaignService {
  constructor(private readonly dynamoDB: DynamoDBDataMapper) {
    //
  }

  async createCampaign(dto: CreateCampaignDto) {
    return this.dynamoDB.mapper
      .put(
        Object.assign(new CampaignSchema(), {
          ...dto,
          id: uuidv4(),
        }),
      )
      .then((campaign) => {
        return Object.assign(new CampaignSchema(), {
          ...campaign,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }
}
