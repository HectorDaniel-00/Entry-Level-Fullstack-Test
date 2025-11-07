import { ResponseUserDto } from "../dto";
import { User } from "../models/index";

export const findAll = async (): Promise<ResponseUserDto[]> => {
  const query = await User.findAll();
  return query.map((v) => v.toJSON() as ResponseUserDto);
};

export const findOne = async (id: number): Promise<ResponseUserDto | null> => {
  const query = await User.findOne({
    where: { id },
  });
  return query ? (query.toJSON() as ResponseUserDto) : null;
};

export const findOneByEmail = async (email: string): Promise<boolean> => {
  const query = await User.findOne({
    where: { email },
  });
  return query ? true : false;
};
