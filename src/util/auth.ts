import jwtDecode from "jwt-decode";
import moment from "moment-timezone";
import { getToken } from "./storage";

export type TokenData = {
  sub: string;
  exp: number;
  roles: Role[];
};

export type Role = "ROLE_USER" | "ROLE_ADMIN";

export const getAuthToken = () => {
  try {
    return jwtDecode(getToken()) as TokenData;
  } catch (error) {
    return undefined;
  }
};

export const isAuthenticated = () => {
  let tokenData = getAuthToken();
  const gmtMinus3 = moment.tz("America/Sao_Paulo");
  const unixTime = gmtMinus3.format("X");
  return tokenData && tokenData.exp > Number(unixTime) ? true : false;
};

export const isAdmin = () => {
  let tokenData = getAuthToken();
  if (tokenData?.roles.includes("ROLE_ADMIN")) {
    return true;
  }
  return false;
};
