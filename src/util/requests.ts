import axios from "axios";

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
