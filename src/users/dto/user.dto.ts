import { ApiProperty } from '@nestjs/swagger';
import { JoinRequestDto } from './join.request.dto';

export class UserDto extends JoinRequestDto {
  @ApiProperty({
    example: 1,
    description: '사용자 아이디',
  })
  id: number;
}
