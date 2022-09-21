import { AUTH_TOKEN_KEY_NAME } from "../consts/consts";

export const saveToken = (token: string): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const getToken = (): string => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? "";
};

export const deleteToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};