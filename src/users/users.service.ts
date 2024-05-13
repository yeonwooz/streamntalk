import { ConflictException, Injectable } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  getUser() {}

  async createUser(data: JoinRequestDto) {
    const { email, password, nickname } = data;

    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      throw new ConflictException('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await this.usersRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });
  }
}
