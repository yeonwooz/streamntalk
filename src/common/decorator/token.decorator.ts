import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const response = ctx.switchToHttp().getResponse();
    return response.locals.jwt;
  },
);

/*
커스텀 데코레이터의 장점

- 테스트를 위해 디커플링시키는 효과
- 프레임워크 마이그레이션할 때 수정할 곳이 줄어들어서 편리
*/
