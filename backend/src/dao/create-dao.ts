import { User } from "../models/index";
import { CreateUserDto, ResponseUserDto } from "../dto";

export const createUserDao = async (
  data: CreateUserDto
): Promise<ResponseUserDto> => {
  const query = await User.create({
    name: data.name,
    id_card: data.id_card,
    email: data.email,
    password: data.password,
  });
  return query.toJSON() as ResponseUserDto;
};
