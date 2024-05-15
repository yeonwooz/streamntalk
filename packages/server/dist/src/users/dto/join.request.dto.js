"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const Users_1 = require("../../entities/Users");
class JoinRequestDto extends (0, swagger_1.PickType)(Users_1.Users, [
    'email',
    'nickname',
    'password',
]) {
}
exports.JoinRequestDto = JoinRequestDto;
//# sourceMappingURL=join.request.dto.js.map