import { User } from "../models/index";

export const deleteUserDao = async (id: number): Promise<boolean> => {
  const query = await User.destroy({
    where: { id },
  });
  return query > 0;
};
