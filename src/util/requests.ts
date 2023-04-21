import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "./storage";

export const BASE_URL = "http://localhost:8080";

type LoginData = {
  login: string;
  password: string;
};

export const requestLogin = (loginData: LoginData) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const data = {
    ...loginData,
  };

  return axios({
    method: "post",
    baseURL: BASE_URL,
    url: "/login",
    data,
    headers,
  });
};

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + getToken(),
      }
    : config.headers;
  return axios({ ...config, baseURL: BASE_URL, headers });
};
