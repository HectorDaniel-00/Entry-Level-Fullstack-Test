import { findOne, findOneByEmail } from "../dao";
import { httpError } from "../utils/app-error";

export const search = async (id: number) => {
  const exist = await findOne(id);
  if (!exist) {
    throw new httpError(404, "Usuario no encontrado");
  }

  return exist;
};
