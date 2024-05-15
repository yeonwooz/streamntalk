import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(user: any): any;
    join(data: JoinRequestDto): Promise<void>;
    logIn(user: any): any;
    logout(req: any, res: any): void;
}
