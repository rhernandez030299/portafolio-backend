"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const port = Number(process.env.DB_PORT) || 3306;
const db = new sequelize_1.Sequelize(process.env.DB_NAME || 'bd_portafolio', process.env.DB_USER || 'root', process.env.DB_PASSWORD || '', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port
});
exports.default = db;
//# sourceMappingURL=connection.js.map