import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { TokenData, getAuthToken, isAuthenticated } from "../../util/auth";
import { getToken, removeToken } from "../../util/storage";

import styles from "./Navbar.module.css";

type AuthData = {
  authenticated: boolean;
  token?: string;
  tokenUsername?: string;
};

export function Navbar() {
  const navigate = useNavigate();

  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        token: getToken(),
        tokenUsername: getAuthToken()?.sub,
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeToken();
    setAuthData({
      authenticated: false,
    });
    navigate("/");
  };

  console.log(authData.tokenUsername);

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles["logo-nav-container"]}>
          <h1 className={styles.h1}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <p>
                <span>Samurai</span>
                <span>Car</span>
              </p>
            </NavLink>
          </h1>
          <div className={styles["login-country-container"]}>
            {authData.authenticated ? (
              <>
                <span>{authData.tokenUsername}</span>
                <button onClick={handleLogoutClick}>Logout</button>
              </>
            ) : (
              <button onClick={() => navigate("/auth")}>Login</button>
            )}
            <img
              src="https://logodownload.org/wp-content/uploads/2022/05/brazil-flag-bandeira.png"
              alt="logo-brazil"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
