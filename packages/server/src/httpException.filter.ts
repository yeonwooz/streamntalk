import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

// HttpException을 인터셉트하는 에러 핸들러
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const err = exception.getResponse() as
      | string // 직접 발생시킨 에러
      | { error: string; statusCode: 400; message: string[] }; // class-validator의 에러

    if (typeof err !== 'string' && err.error === 'Bad Request') {
      return response.status(status).json({
        success: false,
        code: status,
        data: err.message,
      });
    }

    return response.status(status).json({
      success: false,
      code: status,
      data: err,
    });
  }
}
