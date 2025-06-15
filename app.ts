import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { router } from "./src/route/router";
import { errorHandler } from "./src/utility/errorHandler";
import cors from "cors";
const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(errorHandler);
app.use("/api", router);
export default app;
