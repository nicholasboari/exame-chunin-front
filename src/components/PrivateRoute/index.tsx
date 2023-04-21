import { Navigate, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../util/auth";

// @ts-ignore
export const PrivateRoute = ({ children, path }) => {
  return isAuthenticated() ? children : <Navigate to={path} />;
};
