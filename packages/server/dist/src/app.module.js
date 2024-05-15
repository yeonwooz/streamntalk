"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const users_module_1 = require("./users/users.module");
const channels_module_1 = require("./channels/channels.module");
const dms_module_1 = require("./dms/dms.module");
const workspaces_module_1 = require("./workspaces/workspaces.module");
const typeorm_1 = require("@nestjs/typeorm");
const ChannelChats_1 = require("./entities/ChannelChats");
const ChannelMembers_1 = require("./entities/ChannelMembers");
const Channels_1 = require("./entities/Channels");
const DMs_1 = require("./entities/DMs");
const Mentions_1 = require("./entities/Mentions");
const Users_1 = require("./entities/Users");
const WorkspaceMembers_1 = require("./entities/WorkspaceMembers");
const Workspaces_1 = require("./entities/Workspaces");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [
                    ChannelChats_1.ChannelChats,
                    ChannelMembers_1.ChannelMembers,
                    Channels_1.Channels,
                    DMs_1.DMs,
                    Mentions_1.Mentions,
                    Users_1.Users,
                    WorkspaceMembers_1.WorkspaceMembers,
                    Workspaces_1.Workspaces,
                ],
                keepConnectionAlive: true,
                migrations: [`${__dirname}/src/migrations/*.ts`],
                charset: 'utf8mb4_general_ci',
                synchronize: false,
                logging: true,
            }),
            users_module_1.UsersModule,
            channels_module_1.ChannelsModule,
            dms_module_1.DmsModule,
            workspaces_module_1.WorkspacesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, config_1.ConfigService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map