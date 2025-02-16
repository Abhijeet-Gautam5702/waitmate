import express, { Request, Response } from "express";
import cors from "cors";
import { env } from "./config/env";

const app = express();

app.use(
  cors({
    origin: env.app.corsOrigin,
    credentials: true,
  })
);

app.use(express.json());

import userRouter from "./modules/users/routes/user.routes";

app.use("/api/v1/user", userRouter);

export default app;
