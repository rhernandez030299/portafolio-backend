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
exports.deleteHabilidad = exports.putHabilidad = exports.postHabilidad = exports.getHabilidadId = exports.getHabilidadTodos = void 0;
const habilidad_1 = __importDefault(require("../models/habilidad"));
const getHabilidadTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield habilidad_1.default.findAll();
    res.json({
        msg: 'gethabilidad',
        users
    });
});
exports.getHabilidadTodos = getHabilidadTodos;
const getHabilidadId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield habilidad_1.default.findByPk(id);
    if (user) {
        res.json({
            msg: 'gethabilidad',
            id,
            user
        });
    }
    else {
        res.status(404).json({
            msg: 'las habilidades no existe',
        });
    }
});
exports.getHabilidadId = getHabilidadId;
const postHabilidad = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'post habilidad',
        body
    });
};
exports.postHabilidad = postHabilidad;
const putHabilidad = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'put Habilidad',
        body,
        id
    });
};
exports.putHabilidad = putHabilidad;
const deleteHabilidad = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete Habilidad',
        id
    });
};
exports.deleteHabilidad = deleteHabilidad;
//# sourceMappingURL=habilidad.js.map