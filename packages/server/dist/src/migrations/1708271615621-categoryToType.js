"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryToType1708271615621 = void 0;
class categoryToType1708271615621 {
    constructor() {
        this.name = 'categoryToType1708271615621';
    }
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `mentions` RENAME COLUMN `category` TO `type`');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `mentions` RENAME COLUMN `type` TO `category`');
    }
}
exports.categoryToType1708271615621 = categoryToType1708271615621;
//# sourceMappingURL=1708271615621-categoryToType.js.map