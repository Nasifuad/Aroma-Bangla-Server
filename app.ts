import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { router } from "./src/route/router";
import { errorHandler } from "./src/utility/errorHandler";
import { hardcoreCors } from "./hardcoreheader";
const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(express.json());

// ← “Hardcore” manual CORS
app.use(hardcoreCors);

app.use("/api", router);
app.use(errorHandler);

export default app;
