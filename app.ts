import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { router } from "./src/route/router";
import { errorHandler } from "./src/utility/errorHandler";
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // Adjust this to your frontend's URL
    credentials: true, // Allow cookies to be sent
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use(helmet());
app.use(cookieParser());
app.use(express.json());

// ← “Hardcore” manual CORS

app.use("/api", router);
app.use(errorHandler);

export default app;
