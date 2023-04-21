"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const multer_1 = __importDefault(require("../utils/multer"));
const validarJWT_1 = __importDefault(require("../utils/validarJWT"));
const router = (0, express_1.Router)();
router.get('/', validarJWT_1.default, usuarios_1.getUsuarios);
router.get('/:id', usuarios_1.getUsuario);
router.post('/', multer_1.default.single('file'), usuarios_1.postUsuario);
router.put('/:id', multer_1.default.single('file'), usuarios_1.putUsuario);
router.delete('/:id', usuarios_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.js.map