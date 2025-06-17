"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
exports.config = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.MONGO_URI || "",
    JWT_SECRET: process.env.JWT_SECRET || "",
};
