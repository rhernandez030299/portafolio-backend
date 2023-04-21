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
exports.deleteContactenos = exports.putContactenos = exports.postContactenos = exports.getContactenos = exports.getContactenosTodo = void 0;
const contactenos_1 = __importDefault(require("../models/contactenos"));
const getContactenosTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield contactenos_1.default.findAll();
    res.json({
        msg: 'getcontactenos',
        users
    });
});
exports.getContactenosTodo = getContactenosTodo;
const getContactenos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield contactenos_1.default.findByPk(id);
    if (user) {
        res.json({
            msg: 'getContactenos',
            id,
            user
        });
    }
    else {
        res.status(404).json({
            msg: 'el Contactenos red  no existe',
        });
    }
});
exports.getContactenos = getContactenos;
const postContactenos = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'post Contactenos',
        body
    });
};
exports.postContactenos = postContactenos;
const putContactenos = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'put Contactenos',
        body,
        id
    });
};
exports.putContactenos = putContactenos;
const deleteContactenos = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete Contactenos',
        id
    });
};
exports.deleteContactenos = deleteContactenos;
//# sourceMappingURL=contactenos.js.map