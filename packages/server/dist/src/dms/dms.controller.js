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
exports.DmsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let DmsController = class DmsController {
    getChats(query, param) {
        const { perPage, page } = query;
        console.log(perPage, page);
    }
    createChat(body) { }
};
exports.DmsController = DmsController;
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'url',
        description: '워크스페이스 url',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: '사용자 id',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'perPage',
        description: '한 번에 가져올 개수',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        description: '페이지 번호',
    }),
    (0, common_1.Get)(':id/chats'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DmsController.prototype, "getChats", null);
__decorate([
    (0, common_1.Post)(':id/chats'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DmsController.prototype, "createChat", null);
exports.DmsController = DmsController = __decorate([
    (0, swagger_1.ApiTags)('dms'),
    (0, common_1.Controller)('api/workspaces/:url/dms')
], DmsController);
//# sourceMappingURL=dms.controller.js.map