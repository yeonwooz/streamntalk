import { JoinRequestDto } from './dto/join.request.dto';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    getUser(): void;
    createUser(data: JoinRequestDto): Promise<void>;
}
