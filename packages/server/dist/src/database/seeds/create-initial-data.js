"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Workspaces_1 = require("../../entities/Workspaces");
const Channels_1 = require("../../entities/Channels");
class UserSeeder {
    async run(dataSource, factoryManager) {
        const workspacesRepository = dataSource.getRepository(Workspaces_1.Workspaces);
        await workspacesRepository.insert([
            {
                id: 1,
                name: 'StreamNTalk',
                url: 'streamntalk',
            },
        ]);
        const channelsRepository = dataSource.getRepository(Channels_1.Channels);
        await channelsRepository.insert([
            {
                id: 1,
                name: '일반',
                WorkspaceId: 1,
                private: false,
            },
        ]);
    }
}
exports.default = UserSeeder;
//# sourceMappingURL=create-initial-data.js.map