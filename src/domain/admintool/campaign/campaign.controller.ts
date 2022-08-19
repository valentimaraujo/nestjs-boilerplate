import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CampaignService } from '@admintool/campaign/campaign.service';
import { CreateCampaignDto } from '@admintool/campaign/dto/create-campaign.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('campaign')
export class CampaignController {
  constructor(private readonly service: CampaignService) {}

  @Post('')
  @HttpCode(HttpStatus.OK)
  public async createCampaign(@Body() dto: CreateCampaignDto) {
    return this.service.createCampaign(dto);
  }
}
