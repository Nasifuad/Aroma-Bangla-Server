"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true, default: "instant-coffee" },
    tags: { type: [String], default: [] },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    quantity: { type: Number, required: true, default: 0 },
    sold: { type: Number, default: 0 },
    netWeight: { type: String, required: true, default: "100g" }, // e.g. "100g"
    flavor: { type: String, default: "classic" }, // e.g. "vanilla"
    image_small: {
        type: String,
        required: true,
        default: "https://www.cafea.com/fileadmin/_processed_/7/b/csm_C_Thumb_Loeslicher_Kaffee_9f14817bfe.png",
    },
    image_big: {
        type: [String],
        required: true,
        default: [
            "https://www.cafea.com/fileadmin/_processed_/7/b/csm_C_Thumb_Loeslicher_Kaffee_9f14817bfe.png",
        ],
    },
    reviews: { type: Number, default: 0 },
    rating: { type: Number, default: 0, min: 0, max: 5, required: false }, // avg. rating
    user: { type: String, required: false },
}, {
    timestamps: true, // adds createdAt and updatedAt
    versionKey: false,
});
// Export model
const ProductModel = mongoose_1.default.model("Product", ProductSchema);
exports.default = ProductModel;
