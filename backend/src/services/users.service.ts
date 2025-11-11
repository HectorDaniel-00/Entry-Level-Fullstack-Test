import { findAll, findOne, findOneByEmail } from "../dao";
import { httpError } from "../utils/app-error";

export const search = async () => {
  const exist = await findAll();
  if (!exist) {
    throw new httpError(404, "Usuario no encontrado");
  }

  return exist;
};
