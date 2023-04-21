import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar() {
  const navigate = useNavigate();

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
            <button onClick={() => navigate("/auth")}>Login</button>
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
