"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validarJWT = (req = express_1.request, res = express_1.response, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token'
        });
    }
    try {
        const resultToken = jsonwebtoken_1.default.verify(token, process.env.SECRETKEY || '');
        req.body.uid = resultToken === null || resultToken === void 0 ? void 0 : resultToken.uid;
        console.log('resultToken', resultToken);
        next();
    }
    catch (error) {
        return res.status(401).json({
            msg: 'Token no válido'
        });
    }
};
exports.default = validarJWT;
//# sourceMappingURL=validarJWT.js.map