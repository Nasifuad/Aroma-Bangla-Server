import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { router } from "./src/route/router";
import { errorHandler } from "./src/utility/errorHandler";
const app = express();
const allowedOrigins = [
  "https://aroma-bangla-client.vercel.app",
  "http://localhost:3000",
  "https://your-second-origin.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use(helmet());
app.use(cookieParser());
app.use(express.json());

app.use("/api", router);
app.use(errorHandler);

export default app;
