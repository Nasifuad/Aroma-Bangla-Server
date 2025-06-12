import { Schema } from "mongoose";

interface User {
  username: string;
  password: string;
  email: string;
  role: string;
}
export const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: String,
    email: String,
    role: {
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
