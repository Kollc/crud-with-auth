import { USER_ID_KEY_NAME } from "../consts/consts";

export const saveUserId = (id: string): void => {
  localStorage.setItem(USER_ID_KEY_NAME, id);
};

export const getUserId = (): string => {
  const token = localStorage.getItem(USER_ID_KEY_NAME);
  return token ?? "";
};

export const deleteUserId = (): void => {
  localStorage.removeItem(USER_ID_KEY_NAME);
};
