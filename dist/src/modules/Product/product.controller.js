"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addReview = exports.applyDiscount = exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const getAllProducts = async (req, res, next) => {
    try {
        const { page = "1", limit = "10", sort = "name" } = req.query;
        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        const products = await product_model_1.default.find()
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
};
exports.getAllProducts = getAllProducts;
const getProductById = async (req, res) => {
    // Logic to get one product by id
    res.status(200).json({ message: `Get product ${req.params.id}` });
};
exports.getProductById = getProductById;
const createProduct = async (req, res, next) => {
    try {
        const { name, brand, description, category, tags, price, discount, quantity, sold, netWeight, type, flavor, image_small, image_big, reviews, rating, user, } = req.body;
        console.log(req.body);
        const product = await product_model_1.default.create({
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
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    // Logic to update product by id
    res.status(200).json({ message: `Product ${req.params.id} updated` });
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    // Logic to delete product by id
    res.status(200).json({ message: `Product ${req.params.id} deleted` });
};
exports.deleteProduct = deleteProduct;
const applyDiscount = async (req, res) => {
    // Logic to apply/update discount for product
    res
        .status(200)
        .json({ message: `Discount applied to product ${req.params.id}` });
};
exports.applyDiscount = applyDiscount;
const addReview = async (req, res) => {
    // Logic to add a review to product
    res.status(201).json({ message: `Review added to product ${req.params.id}` });
};
exports.addReview = addReview;
