"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const ChannelChats_1 = require("./src/entities/ChannelChats");
const ChannelMembers_1 = require("./src/entities/ChannelMembers");
const Channels_1 = require("./src/entities/Channels");
const DMs_1 = require("./src/entities/DMs");
const Mentions_1 = require("./src/entities/Mentions");
const Users_1 = require("./src/entities/Users");
const WorkspaceMembers_1 = require("./src/entities/WorkspaceMembers");
const Workspaces_1 = require("./src/entities/Workspaces");
dotenv_1.default.config();
const dataSource = new typeorm_1.DataSource({
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
    migrations: [`${__dirname}/src/migrations/*.ts`],
    synchronize: false,
    logging: true,
});
exports.default = dataSource;
//# sourceMappingURL=dataSource.js.map