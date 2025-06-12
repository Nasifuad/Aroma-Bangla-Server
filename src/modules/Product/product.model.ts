import mongoose, { Schema } from "mongoose";
import { Product } from "./product.interface";

const ProductSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true, default: "instant-coffee" },
    tags: { type: [String], default: [] },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    quantity: { type: Number, required: true },
    sold: { type: Number, default: 0 },
    netWeight: { type: String, required: true }, // e.g. "100g"
    form: { type: String, required: true }, // e.g. "granules"
    flavor: { type: String, default: "classic" }, // e.g. "vanilla"
    image_small: { type: String, required: true },
    image_big: { type: [String], required: true },
    reviews: { type: Number, default: 0 },
    rating: { type: Number, default: 0 }, // avg. rating
    user: { type: String, required: true },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
    versionKey: false,
  }
);

// Export model
const ProductModel = mongoose.model<Product>("Product", ProductSchema);
export default ProductModel;
