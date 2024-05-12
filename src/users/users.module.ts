import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';

@Module({
  imports: [TypeOrmModule.forFeature([Users])], // repository 디펜던시 인젝션
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
