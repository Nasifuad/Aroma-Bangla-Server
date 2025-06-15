"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = require("express");
const checkAuth_1 = require("../../utility/checkAuth");
const asyncHandler_1 = __importDefault(require("../../utility/asyncHandler"));
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
router.get("/getProducts", (0, asyncHandler_1.default)(product_controller_1.getAllProducts));
router.get("/:id", (0, asyncHandler_1.default)(product_controller_1.getProductById));
router.post("/addProduct", checkAuth_1.checkAuth, (0, asyncHandler_1.default)(product_controller_1.createProduct));
router.put("/:id", checkAuth_1.checkAuth, (0, asyncHandler_1.default)(product_controller_1.updateProduct));
router.delete("/:id", checkAuth_1.checkAuth, (0, asyncHandler_1.default)(product_controller_1.deleteProduct));
exports.productRoute = router;
