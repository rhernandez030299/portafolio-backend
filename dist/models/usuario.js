"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const rol_1 = __importDefault(require("./rol"));
const Usuario = connection_1.default.define('usuario', {
    idusuario: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    contrasenia: {
        type: sequelize_1.DataTypes.STRING
    },
    foto: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.TINYINT
    },
    edad: {
        type: sequelize_1.DataTypes.INTEGER
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    idrol: {
        type: sequelize_1.DataTypes.BIGINT
    }
}, {
    tableName: 'usuario'
});
Usuario.belongsTo(rol_1.default, {
    foreignKey: "idrol"
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map