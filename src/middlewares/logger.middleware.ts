import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    // 1. 미들웨어 함수 실행시작
    const { ip, method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';

    response.on('finish', () => {
      // 3.라우터가 끝날 때 ('fisish' 이벤트) 실행되는 부분
      const { statusCode } = response;
      const contentLength = response.get('content-length');

      const loggerFormat = `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`;

      this.logger.log(loggerFormat);
    });

    // 2. 라우터 이동
    next();
  }
}
