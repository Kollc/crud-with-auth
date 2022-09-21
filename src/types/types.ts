import { AuthStatus } from "../consts/consts";
import { store } from "./../store/store";

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AuthData = {
  email: string;
  password: string;
};

export type UserProcessType = {
  email: string;
  authStatus: AuthStatus;
  error: string;
};

export type ContactProcessType = {
  contacts: ContactType[];
  error: string;
};

export type ContactCreateData = {
  name: string;
  location: string;
};

export type ContactType = {
  id: string;
  name: string;
  location: string;
};
