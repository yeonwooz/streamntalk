import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('channels')
@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  // channels
  @Get()
  getAllChannels() {}

  @Get(':namd')
  getChannel() {}

  @Post()
  createChannel() {}

  // chats
  @Get(':name/chats')
  getChats(@Query() query, @Param() param) {}

  @Post(':name/chats')
  createChat(@Body() body) {}

  // members
  @Get(':name/members')
  getAllMembers() {}

  @Post(':name/members')
  inviteMembers() {}
}
