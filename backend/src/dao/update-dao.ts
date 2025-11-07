import { ResponseUserDto, UpdateUserDto } from "../dto";
import { User } from "../models/index";

export const updateUserDao = async (
  id: number,
  data: UpdateUserDto
): Promise<ResponseUserDto | null> => {
  const [rows, user] = await User.update(data, {
    where: { id },
    returning: true,
  });

  if (rows > 0 && user.length > 0) {
    return user[0]?.toJSON() as ResponseUserDto;
  }
  return null;
};
