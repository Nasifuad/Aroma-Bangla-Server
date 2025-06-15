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
exports.addReview = exports.applyDiscount = exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page = "1", limit = "10", sort = "name" } = req.query;
        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        const products = yield product_model_1.default.find()
            .sort(sort)
            .skip((pageNum - 1) * limitNum)
            .limit(limitNum);
        res
            .status(200)
            .json({ success: true, count: products.length, data: products });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Logic to get one product by id
    res.status(200).json({ message: `Get product ${req.params.id}` });
});
exports.getProductById = getProductById;
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, brand, description, category, tags, price, discount, quantity, sold, netWeight, type, flavor, image_small, image_big, reviews, rating, user, } = req.body;
        console.log(req.body);
        const product = yield product_model_1.default.create({
            name,
            brand,
            description,
            category,
            tags,
            price,
            discount,
            quantity,
            sold,
            netWeight,
            type,
            flavor,
            image_small,
            image_big,
            reviews,
            rating,
            user,
        });
        res.status(201).json({ success: true, data: product });
    }
    catch (error) {
        next(error);
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Logic to update product by id
    res.status(200).json({ message: `Product ${req.params.id} updated` });
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Logic to delete product by id
    res.status(200).json({ message: `Product ${req.params.id} deleted` });
});
exports.deleteProduct = deleteProduct;
const applyDiscount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Logic to apply/update discount for product
    res
        .status(200)
        .json({ message: `Discount applied to product ${req.params.id}` });
});
exports.applyDiscount = applyDiscount;
const addReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Logic to add a review to product
    res.status(201).json({ message: `Review added to product ${req.params.id}` });
});
exports.addReview = addReview;
