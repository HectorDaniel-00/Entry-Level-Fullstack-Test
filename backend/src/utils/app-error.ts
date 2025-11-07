import { ErrorUserResponse } from "../dto/user/error-response-dto";

export class httpError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = "HtppError";
  }
}
export const searchEmptySpaces = (values: ErrorUserResponse): void => {
  const emptyValues = Object.entries(values).filter(([_, value]) => {
    value === undefined || value === null || value === "";
  });

  if (emptyValues.length > 0) {
    const files = emptyValues.map(([key]) => key).join(", ");
    throw new httpError(400, `The following fields are empty: ${files}`);
  }
};
