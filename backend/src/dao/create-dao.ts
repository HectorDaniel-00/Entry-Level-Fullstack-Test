import { User } from "../models/index";
import { CreateUserDto, ResponseUserDto } from "../dto";

export const createUserDao = async (
  data: CreateUserDto
): Promise<ResponseUserDto> => {
  const query = await User.create({
    name: data.name,
    email: data.email,
    password: data.password,
    active: true,
  });
  return query.toJSON() as ResponseUserDto;
};
