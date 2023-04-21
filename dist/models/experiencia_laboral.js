"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const ExperienciaLaboral = connection_1.default.define('experiencia_laboral', {
    idexperiencia_laboral: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: false,
        primaryKey: true
    },
    fecha_inicio: {
        type: sequelize_1.DataTypes.DATE
    },
    fecha_fin: {
        type: sequelize_1.DataTypes.DATE
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    url: {
        type: sequelize_1.DataTypes.STRING
    },
    foto: {
        type: sequelize_1.DataTypes.STRING
    },
    idusuario: {
        type: sequelize_1.DataTypes.BIGINT
    }
}, {
    tableName: 'experiencia_laboral'
});
ExperienciaLaboral.belongsTo(usuario_1.default, {
    foreignKey: "idusuario"
});
exports.default = ExperienciaLaboral;
//# sourceMappingURL=experiencia_laboral.js.map