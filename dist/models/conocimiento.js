"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const habilidad_1 = __importDefault(require("./habilidad"));
const Conocimiento = connection_1.default.define('conocimiento', {
    idconocimiento: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: false,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.INTEGER
    },
    idhabilidad: {
        type: sequelize_1.DataTypes.BIGINT
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'conocimiento'
});
Conocimiento.belongsTo(habilidad_1.default, {
    foreignKey: "idhabilidad"
});
exports.default = Conocimiento;
//# sourceMappingURL=conocimiento.js.map