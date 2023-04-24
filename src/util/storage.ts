export const authToken = (token: string) => {
  localStorage.setItem("authData", token);
};

export const getToken = () => {
  return localStorage.getItem("authData") ?? "";
};

export const removeToken = () => {
  localStorage.removeItem("authData");
};
