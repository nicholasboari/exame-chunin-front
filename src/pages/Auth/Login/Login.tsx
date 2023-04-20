import styles from "./Login.module.css";

export function Login() {
  return (
    <div className={styles["login-card"]}>
      <h1>LOGIN</h1>
      <form className={styles["form-container"]}>
        <div>
          <input
            type="text"
            placeholder="username"
            name="username"
            className={styles["base-input"]}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            className={styles["base-input"]}
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}
