"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, req, res, next) {
    console.error(err); // Log error for debugging
    const statusCode = err.statusCode || 500;
    const message = statusCode === 500
        ? "Internal Server Error"
        : err.message || "Something went wrong";
    res.status(statusCode).json({
        success: false,
        error: message,
    });
}
