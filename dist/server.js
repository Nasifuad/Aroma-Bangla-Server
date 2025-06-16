"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./DB/database");
const config_1 = require("./config/config");
(0, database_1.connectDB)().then(() => {
    try {
        app_1.default.listen(config_1.config.PORT, () => {
            console.log("Server is running on port", config_1.config.PORT);
        });
    }
    catch (error) {
        console.log("error at server", error);
    }
});
