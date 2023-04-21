"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const Proyecto = connection_1.default.define('proyecto', {
    idproyecto: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.INTEGER
    },
    iddescripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    url: {
        type: sequelize_1.DataTypes.STRING
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING
    },
    video: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE
    },
    idusuario: {
        type: sequelize_1.DataTypes.BIGINT
    }
}, {
    tableName: 'proyecto'
});
Proyecto.belongsTo(usuario_1.default, {
    foreignKey: "idusuario"
});
exports.default = Proyecto;
//# sourceMappingURL=proyecto.js.map