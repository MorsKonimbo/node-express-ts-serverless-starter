import express from "express";
import serverless from "serverless-http";
import { json } from "body-parser";

import cors from "cors";
import todosRoutes from "./routes/todos";

const app = express();

app.use(cors());
app.use(json());
app.use("/todos", todosRoutes);

export const handler = serverless(app);
