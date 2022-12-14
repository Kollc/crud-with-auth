export enum AppRoutes {
  Main = "/",
  Contacts = "/contacts",
}

export enum APIRoute {
  Register = "/register",
  Login = "/login",
  Users = "/users",
  Contacts = "/contacts",
}

export enum SignTabs {
  SignIn = "Войти",
  SignUp = "Зарегестрироваться",
}

export enum ApiEndpoint {
  Login = "/600",
  Users = "/660",
}

export enum NameSpace {
  User = "USER",
  Contacts = "CONTACTS",
}

export const AUTH_TOKEN_KEY_NAME = "AUTH_TOKEN";

export const USER_ID_KEY_NAME = "USER_ID";

export enum AuthStatus {
  Auth = "AUTH",
  Unknown = "UNKNOWN",
  NoAuth = "NO AUTH",
}

export const BASE_URL = "http://localhost:3004";
export const TIMEOUT_SERVER = 5000;

export enum ServerError {
  Code = 500,
  Message = "Server error!",
}

export const ErrorMessagesSignUp = new Map([
  ["Password Not Match", "Пароли не совпадают!"],
  [
    "Bad Request",
    "Введены некорректные данные и/или такой пользователь уже существует!",
  ],
]);

export const ErrorMessagesSignIn = new Map([
  ["Bad Request", "Введены некорректные данные!"],
]);

export const TIMEOUT_RESET_MESSAGE = 5000;
