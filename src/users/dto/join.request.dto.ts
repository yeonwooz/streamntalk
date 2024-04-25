// interface는 컴파일 후 런타임에 사라지지만, class는 남아있게 된다

import { PickType } from '@nestjs/swagger';
import { Users } from 'src/entities/Users';

// class를 사용하면 런타임에도 타입 정보를 사용할 수 있다
export class JoinRequestDto extends PickType(Users, [
  'email',
  'nickname',
  'password',
] as const) {}
