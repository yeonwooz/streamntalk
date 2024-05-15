import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { LocalSerializer } from './local-serializer';

@Module({
  imports: [
    PassportModule.register({ session: true }), // nestjs에서 passport를 모듈화해줌, 그리고 세션기반으로 할거면 session: true
    TypeOrmModule.forFeature([Users]),
  ],
  providers: [AuthService, LocalStrategy, LocalSerializer],
})
export class AuthModule {}
