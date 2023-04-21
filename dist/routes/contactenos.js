"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactenos_1 = require("../controllers/contactenos");
const contactenosRouter = (0, express_1.Router)();
contactenosRouter.get('/', contactenos_1.getContactenosTodo);
contactenosRouter.get('/:id', contactenos_1.getContactenos);
contactenosRouter.post('/', contactenos_1.postContactenos);
contactenosRouter.put('/:id', contactenos_1.putContactenos);
contactenosRouter.delete('/:id', contactenos_1.deleteContactenos);
exports.default = contactenosRouter;
//# sourceMappingURL=contactenos.js.map