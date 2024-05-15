import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// injectable은 해당 클래스가 주입이 가능한 상태로 만들준다
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const can = await super.canActivate(context);
    if (can) {
      const request = context.switchToHttp().getRequest();
      console.log('login for cookie');

      // strategy에서 넘어옴
      await super.logIn(request);
    }

    return true;
  }
}
