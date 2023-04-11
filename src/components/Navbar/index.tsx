import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles["logo-nav-container"]}>
          <h1 className={styles.h1}>
            <p>
              <span>Samurai</span>
              <span>Car</span>
            </p>
          </h1>
          <div className={styles["login-country-container"]}>
            <button>Login</button>
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
