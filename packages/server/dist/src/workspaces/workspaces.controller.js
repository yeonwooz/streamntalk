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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspacesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let WorkspacesController = class WorkspacesController {
    getMyWorkspaces() { }
    createWorkspace() { }
    getAllMembersFromWorkspace() { }
    getMemberInfoInWorkspace() { }
    inviteMembersToWorkspace() { }
    removeMemberFromWorkspace() { }
};
exports.WorkspacesController = WorkspacesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "getMyWorkspaces", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "createWorkspace", null);
__decorate([
    (0, common_1.Get)(':url/members'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "getAllMembersFromWorkspace", null);
__decorate([
    (0, common_1.Get)(':url/members/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "getMemberInfoInWorkspace", null);
__decorate([
    (0, common_1.Post)(':url/members'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "inviteMembersToWorkspace", null);
__decorate([
    (0, common_1.Delete)(':url/members/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "removeMemberFromWorkspace", null);
exports.WorkspacesController = WorkspacesController = __decorate([
    (0, swagger_1.ApiTags)('workspaces'),
    (0, common_1.Controller)('api/workspaces')
], WorkspacesController);
//# sourceMappingURL=workspaces.controller.js.map