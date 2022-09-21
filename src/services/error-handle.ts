import request from "axios";
import { ServerError } from "../consts/consts";

const handleError = (status: number, statusText: string): string =>
  `${status} ${statusText}`;

export const errorHandler = (error: unknown): string => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    return handleError(response.status, response.statusText);
  }

  return handleError(ServerError.Code, ServerError.Message);
};
