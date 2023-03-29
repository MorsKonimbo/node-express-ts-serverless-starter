import { RequestHandler } from "express";

export const authorization: RequestHandler = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (authorization !== `Bearer ${process.env.TOKEN}`) {
      res.status(401).json({ status: "fail", message: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
  next();
};
