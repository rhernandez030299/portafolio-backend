"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (error, req, res, next) => {
    console.log('error', error);
    const status = error.statusCode || 500;
    const message = error.message || 'Ocurrio un error en el servidor';
    res.status(status).json({ success: false, error: message });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map