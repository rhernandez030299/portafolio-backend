"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Habilidad = connection_1.default.define('habilidad', {
    idhabilidad: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: false,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'habilidad'
});
exports.default = Habilidad;
//# sourceMappingURL=habilidad.js.map