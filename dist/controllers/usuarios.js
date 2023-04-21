"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const rol_1 = __importDefault(require("../models/rol"));
const usuario_1 = __importDefault(require("../models/usuario"));
const usuarioSchema_1 = require("../validate/usuarioSchema");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield usuario_1.default.findAll({
        attributes: ['idusuario', 'nombre', 'email', 'foto', 'idrol'],
        include: [{
                model: rol_1.default
            }]
    });
    res.json({
        msg: 'getusuarios',
        users
    });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield usuario_1.default.findByPk(id);
    if (user) {
        res.json({
            msg: 'getusuarios',
            id,
            user
        });
    }
    else {
        res.status(404).json({
            msg: 'el usuario no existe',
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { body } = req;
        const filename = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        body.idrol = 1;
        body.foto = filename;
        yield usuarioSchema_1.usuarioSchema.validate(body);
        const salt = bcryptjs_1.default.genSaltSync();
        body.contrasenia = bcryptjs_1.default.hashSync(body.contrasenia, salt);
        const response = yield usuario_1.default.create(body);
        res.json({
            msg: 'post usarios',
            body
        });
    }
    catch (error) {
        next(error);
        // return res.status(500).json({type: error.name, message: error.message})
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { id } = req.params;
    const { body } = req;
    const filename = (_b = req.file) === null || _b === void 0 ? void 0 : _b.filename;
    body.idrol = 1;
    body.foto = filename;
    yield usuarioSchema_1.usuarioSchemaActualizar.validate(body);
    const usuarioActualizado = usuario_1.default.update(body, {
        where: {
            idusuario: id
        }
    });
    res.json({
        msg: 'put usuarios',
        body,
        id,
        usuarioActualizado
    });
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield usuario_1.default.destroy({
        where: {
            idusuario: id
        }
    });
    res.json({
        msg: 'delete usuarios',
        id
    });
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map