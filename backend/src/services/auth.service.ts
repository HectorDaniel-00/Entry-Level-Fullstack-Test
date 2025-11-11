import { findOneByEmail } from "../dao";
import { AuthLoginDto, AuthRegisterDto } from "../dto";
import { User } from "../models";
import { httpError, searchEmptySpaces } from "../utils/app-error";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

export const register = async (data: AuthRegisterDto) => {
  const existEmail = await findOneByEmail(data.email);
  if (existEmail) {
    throw new httpError(
      404,
      `Datos duplicados ${data.email} por favor intentar con otro`
    );
  }

  const hashPassword = await bcrypt.hash(data.password, 10);

  const newUser = {
    name: data.name,
    email: data.email,
    password: hashPassword,
  };
  const user = await User.create(newUser);

  return {
    message: "user created successfully",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
};

export const login = async (email: string, password: string) => {
  const values = { email, password };
  searchEmptySpaces(values);
  const user = await User.findOne({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new httpError(
      404,
      `Datos duplicados ${email} por favor intentar con otro`
    );
  }
  const token = generateToken({
    id: user.id,
    name: user.name,
    email: user.email,
  });

  return {
    message: "Login successful",
    token,
  };
};
