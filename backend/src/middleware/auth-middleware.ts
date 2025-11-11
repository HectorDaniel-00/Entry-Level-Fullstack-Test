import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import envConfig from "../config/env-config";

export interface AuthRequest extends Request {
  user?: {
    id: number;
    email: string;
  };
}

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).json({
        message: "Token not provided",
      });
      return;
    }

    const decoded = (await jwt.verify(
      token,
      envConfig.JWT_SECRET || "secret"
    )) as {
      id: number;
      name: string;
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
