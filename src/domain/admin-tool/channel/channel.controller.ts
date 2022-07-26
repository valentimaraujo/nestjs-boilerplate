import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { ChannelService } from '@admin-tool/channel/channel.service';

@Controller('channel')
export class ChannelController {
  constructor(private readonly service: ChannelService) {}

  @Post('')
  @HttpCode(HttpStatus.OK)
  public async createChannel() {
    return this.service.createChannel();
  }
}
