import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CampaignService } from '@admintool/campaign/campaign.service';
import { CreateCampaignDto } from '@admintool/campaign/dto/create-campaign.dto';
import { CampaignSchema } from '@admintool/campaign/campaign.schema';

@UseGuards(AuthGuard('jwt'))
@Controller('campaign')
export class CampaignController {
  constructor(private readonly service: CampaignService) {}

  @Post('')
  @HttpCode(HttpStatus.OK)
  public async createCampaign(
    @Body() dto: CreateCampaignDto,
  ): Promise<CampaignSchema> {
    return this.service.createCampaign(dto);
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  public async listCampaign(): Promise<CampaignSchema[]> {
    return this.service.listCampaigns();
  }
}
