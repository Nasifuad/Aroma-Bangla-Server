"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const product_route_1 = require("../modules/Product/product.route");
//dd
const router = (0, express_1.default)();
exports.router = router;
const routes = [
    {
        path: "/product",
        route: product_route_1.productRoute,
    },
];
routes.forEach((route) => {
    router.use(route.path, route.route);
});
router.get("/route", (req, res) => {
    res.send("Hellodfdff World!");
});
