import { TIMEOUT_SERVER } from "./../consts/consts";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BASE_URL } from "../consts/consts";
import { getToken } from "./user-token";

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT_SERVER,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  });

  return api;
};

export const registerUser = async (email: string, password: string) => {
  const api = createApi();

  try {
    const { data } = await api.post("/register", { email, password });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
