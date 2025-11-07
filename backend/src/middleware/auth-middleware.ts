import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import envConfig from "../config/env-config";

export interface AuthRequest extends Request {
  user?: {
    id: number;
    email: string;
  };
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).json({
        message: "Token not provided",
      });
      return;
    }

    const decoded = jwt.verify(token, envConfig.JWT_SECRET || "secret") as {
      id: number;
      email: string;
    };

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};
