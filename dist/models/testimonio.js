"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const Testimonio = connection_1.default.define('testimonio', {
    idtestimonio: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: false,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    foto: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE
    },
    idusuario: {
        type: sequelize_1.DataTypes.BIGINT
    }
}, {
    tableName: 'testimonio'
});
Testimonio.belongsTo(usuario_1.default, {
    foreignKey: "idusuario"
});
exports.default = Testimonio;
//# sourceMappingURL=testimonio.js.map