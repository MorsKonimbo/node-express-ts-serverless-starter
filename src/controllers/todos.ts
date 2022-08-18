import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const TODOS: Todo[] = [{ id: "1", text: "Template Project BOOMMM!!!" }];

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};
