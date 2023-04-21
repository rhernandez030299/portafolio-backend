"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const red_1 = __importDefault(require("./red"));
const usuario_1 = __importDefault(require("./usuario"));
const UsuarioRed = connection_1.default.define('usuario_red', {
    idusuario_red: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    idusuario: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    idred: {
        type: sequelize_1.DataTypes.BIGINT
    },
    link: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    tableName: 'usuario_red'
});
UsuarioRed.belongsTo(red_1.default, {
    foreignKey: "idred"
});
UsuarioRed.belongsTo(usuario_1.default, {
    foreignKey: "idusuario"
});
exports.default = UsuarioRed;
//# sourceMappingURL=usuario_red.js.map