import { Injectable } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';

@Injectable()
export class UsersService {
  createUser(data: JoinRequestDto) {}
}
