import { Document } from "mongoose";

export interface Product extends Document {
  name: string;
  brand: string;
  description: string;
  category: string;
  tags: string[];
  price: number;
  discount: number;
  quantity: number;
  sold: number;
  netWeight: string;
  type: string;
  flavor: string;
  image_small: string;
  image_big: string[];
  reviews: number;
  rating: number;
  user: string;
}
