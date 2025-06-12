import mongoose from "mongoose";
import { config } from "../config/config";

export const connectDB = async () => {
  try {
    console.log(config);
    await mongoose.connect(config.DB_URL);
    console.log("Database connected");
  } catch (error) {
    console.log("Error occured when connecting to databse", error);
  }
};

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("Database disconnected");
  } catch (error) {
    console.log(error);
  }
};

export const closeDB = async () => {
  try {
    await mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.log(error);
  }
};
