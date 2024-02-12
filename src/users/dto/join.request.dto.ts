// interface는 컴파일 후 런타임에 사라지지만, class는 남아있게 된다

import { ApiProperty } from '@nestjs/swagger';

// class를 사용하면 런타임에도 타입 정보를 사용할 수 있다
export class JoinRequestDto {
  @ApiProperty({
    example: 'woosean999@gmail.com',
    description: '이메일',
    // required is true by default
  })
  public email: string;

  @ApiProperty({
    example: 'sean',
    description: '닉네임',
  })
  public nickname: string;

  @ApiProperty({
    example: '123!@#',
    description: '비밀번호',
  })
  public password: string;

  //   @ApiPropertyOptional({
  //     example: '01012345678',
  //     description: '휴대폰 번호',
  //   })
  //   public phoneNumber: string;
}
