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
  SignIn = "Sign In",
  SignUp = "Sign Up",
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
  Unknow = "UNKNOW",
  NoAuth = "NO AUTH",
}

export const BASE_URL = "http://localhost:3004";
export const TIMEOUT_SERVER = 5000;

export enum ServerError {
  Code = 500,
  Message = "Server error!",
}

