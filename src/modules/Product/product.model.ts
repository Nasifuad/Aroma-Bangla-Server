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
    quantity: { type: Number, required: true, default: 0 },
    sold: { type: Number, default: 0 },
    netWeight: { type: String, required: true, default: "100g" }, // e.g. "100g"
    flavor: { type: String, default: "classic" }, // e.g. "vanilla"
    image_small: {
      type: String,
      required: true,
      default:
        "https://www.cafea.com/fileadmin/_processed_/7/b/csm_C_Thumb_Loeslicher_Kaffee_9f14817bfe.png",
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
  },
  {
    timestamps: true, // adds createdAt and updatedAt
    versionKey: false,
  }
);

// Export model
const ProductModel = mongoose.model<Product>("Product", ProductSchema);
export default ProductModel;
