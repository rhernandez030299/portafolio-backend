"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_red_1 = require("../controllers/usuario_red");
const UsuarioRedrouter = (0, express_1.Router)();
UsuarioRedrouter.get('/', usuario_red_1.getUsuariosRed);
UsuarioRedrouter.get('/:id', usuario_red_1.getUsuarioRed);
UsuarioRedrouter.post('/', usuario_red_1.postUsuarioRed);
UsuarioRedrouter.put('/:id', usuario_red_1.putUsuarioRed);
UsuarioRedrouter.delete('/:id', usuario_red_1.deleteUsuarioRed);
exports.default = UsuarioRedrouter;
//# sourceMappingURL=usuarios_red.js.map