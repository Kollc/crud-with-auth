import { AuthStatus, NameSpace } from "../../consts/consts";
import { State } from "../../types/types";

export const getUserEmail = (state: State): string =>
  state[NameSpace.User].email;

export const getAuthStatus = (state: State): AuthStatus =>
  state[NameSpace.User].authStatus;

export const getUserError = (state: State): string =>
  state[NameSpace.User].error;
