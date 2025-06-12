import { configDotenv } from "dotenv";

configDotenv();

//type safety
interface Config {
  PORT: number | string;
  DB_URL: string;
  JWT_SECRET: string;
}

export const config = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.MONGO_URI || "",
  JWT_SECRET: process.env.JWT_SECRET || "",
};
