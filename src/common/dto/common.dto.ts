import { ApiProperty } from '@nestjs/swagger';

export class ResponseErrorDto {
  //   @ApiProperty({
  //     description: '상태 코드',
  //   })
  public statusCode: number;

  public error: string;

  //   @ApiProperty({
  //     description: '에러 상세 메시지',
  //   })
  public message: string;
}
