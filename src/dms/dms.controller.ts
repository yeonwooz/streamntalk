import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChats(@Query() query, @Param() param) {
    const { perPage, page } = query;
    console.log(perPage, page);
  }

  @Post(':id/chats')
  createChat(@Body() body) {}
}
