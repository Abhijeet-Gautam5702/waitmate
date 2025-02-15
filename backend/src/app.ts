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

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!!");
});

export default app;
