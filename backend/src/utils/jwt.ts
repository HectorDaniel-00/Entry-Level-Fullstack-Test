import jwt from "jsonwebtoken";
import envConfig from "../config/env-config";

const SECRET = envConfig.JWT_SECRET;

interface Payload {
  id: number;
  name: string;
  email: string;
}

export const generateToken = (payload: Payload): string => {
  const token = jwt.sign(payload, SECRET, { expiresIn: "10d" });

  return token;
};
