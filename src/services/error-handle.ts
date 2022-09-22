import request from "axios";
import { ServerError } from "../consts/consts";

const handleError = (statusText: string): string => statusText;

export const errorHandler = (error: unknown): string => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    return handleError(response.statusText);
  }

  return handleError(ServerError.Message);
};
