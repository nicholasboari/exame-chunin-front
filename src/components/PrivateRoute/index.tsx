import { Navigate, useNavigate } from "react-router-dom";
import { isAdmin, isAuthenticated } from "../../util/auth";

// @ts-ignore
export const PrivateRoute = ({ children, path }) => {
  return isAuthenticated() && isAdmin() ? children : <Navigate to={path} />;
};
