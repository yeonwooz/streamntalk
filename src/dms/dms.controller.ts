import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChats(@Query() query) {
    const { perPage, page } = query;
    console.log(perPage, page);
  }

  @Post(':id/chats')
  postChat() {}
}
