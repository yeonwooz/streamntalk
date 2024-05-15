import { Users } from 'src/entities/Users';
declare const JoinRequestDto_base: import("@nestjs/common").Type<Pick<Users, "email" | "nickname" | "password">>;
export declare class JoinRequestDto extends JoinRequestDto_base {
}
export {};
