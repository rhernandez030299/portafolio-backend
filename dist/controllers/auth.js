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
exports.validateToken = exports.logout = exports.login = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generarJWT_1 = __importDefault(require("../utils/generarJWT"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, contrasenia } = req.body;
    try {
        //Verificar el email
        const usuario = yield usuario_1.default.findOne({
            where: {
                email,
            }
        });
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario o contraseña no son correctos'
            });
        }
        //verificar si el estado es activo
        if (usuario.dataValues.estado == 0) {
            return res.status(400).json({
                msg: 'Usuario inactivo'
            });
        }
        //verficar la contraseña
        const validPassword = bcryptjs_1.default.compareSync(contrasenia, usuario.dataValues.contrasenia);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario o contraseña no son correctos'
            });
        }
        //generar el token 
        const token = yield (0, generarJWT_1.default)(usuario.dataValues.idusuario);
        res.json({
            token,
            usuario: usuario.dataValues,
            msg: 'ingreso al login',
        });
    }
    catch (error) {
        res.status(500).json({
            error,
            msg: 'error en el login',
        });
    }
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'El usuario cerro sesión correctamente',
    });
});
exports.logout = logout;
const validateToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.body;
    const usuario = yield usuario_1.default.findByPk(uid);
    if (!usuario) {
        return res.status(400).json({
            msg: 'Usuario no existe'
        });
    }
    res.json({
        usuario,
        msg: 'El usuario cerro sesión correctamente',
    });
});
exports.validateToken = validateToken;
//# sourceMappingURL=auth.js.map