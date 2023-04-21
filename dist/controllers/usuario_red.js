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
exports.deleteUsuarioRed = exports.putUsuarioRed = exports.postUsuarioRed = exports.getUsuarioRed = exports.getUsuariosRed = void 0;
const usuario_red_1 = __importDefault(require("../models/usuario_red"));
const getUsuariosRed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield usuario_red_1.default.findAll();
    res.json({
        msg: 'getusuario_red',
        users
    });
});
exports.getUsuariosRed = getUsuariosRed;
const getUsuarioRed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield usuario_red_1.default.findByPk(id);
    if (user) {
        res.json({
            msg: 'getusuarios_red',
            id,
            user
        });
    }
    else {
        res.status(404).json({
            msg: 'el usuario red  no existe',
        });
    }
});
exports.getUsuarioRed = getUsuarioRed;
const postUsuarioRed = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'post usarios_red',
        body
    });
};
exports.postUsuarioRed = postUsuarioRed;
const putUsuarioRed = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'put usuarios_red',
        body,
        id
    });
};
exports.putUsuarioRed = putUsuarioRed;
const deleteUsuarioRed = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete usuarios_red',
        id
    });
};
exports.deleteUsuarioRed = deleteUsuarioRed;
//# sourceMappingURL=usuario_red.js.map