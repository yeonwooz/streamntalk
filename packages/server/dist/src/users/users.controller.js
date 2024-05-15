"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const join_request_dto_1 = require("./dto/join.request.dto");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("./dto/user.dto");
const common_dto_1 = require("../common/dto/common.dto");
const user_decorator_1 = require("../common/decorator/user.decorator");
const undefinedToNull_interceptor_1 = require("../common/interceptor/undefinedToNull.interceptor");
const local_auth_guard_1 = require("../auth/local-auth.guard");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    getUsers(user) {
        return user;
    }
    async join(data) {
        await this.userService.createUser(data);
    }
    logIn(user) {
        return user;
    }
    logout(req, res) {
        req.logout();
        res.clearCookie('connect.sid', { httpOnly: true });
        res.send('ok');
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '내 정보 조회' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공',
        type: () => [user_dto_1.UserDto],
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버에러',
        type: () => [common_dto_1.ResponseErrorDto],
    }),
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '회원가입' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [join_request_dto_1.JoinRequestDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "join", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공',
        type: () => [user_dto_1.UserDto],
    }),
    (0, swagger_1.ApiOperation)({ summary: '로그인' }),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "logIn", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '로그아웃' }),
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "logout", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.UseInterceptors)(undefinedToNull_interceptor_1.UndefinedToNullInterceptor),
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('api/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map