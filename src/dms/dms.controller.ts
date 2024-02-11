import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('dms')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @ApiParam({
    name: 'url',
    description: '워크스페이스 url',
  })
  @ApiParam({
    name: 'id',
    description: '사용자 id', // chat id??
  })
  @ApiQuery({
    name: 'perPage',
    description: '한 번에 가져올 개수',
  })
  @ApiQuery({
    name: 'page',
    description: '페이지 번호',
  })
  @Get(':id/chats')
  getChats(@Query() query, @Param() param) {
    const { perPage, page } = query;
    console.log(perPage, page);
  }

  @Post(':id/chats')
  createChat(@Body() body) {}
}
