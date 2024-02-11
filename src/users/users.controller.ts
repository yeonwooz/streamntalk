import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('api/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: '내 정보 조회' })
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  @ApiOperation({ summary: '회원가입' })
  @ApiBody({ type: JoinRequestDto })
  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    this.userService.createUser(data);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn() {}

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logout(@Req() req, @Res() res) {
    // express 문법을 사용
    // req, res 의존성 어쩔 수 없음
    req.logout();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
