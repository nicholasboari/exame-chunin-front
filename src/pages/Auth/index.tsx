import { Login } from "./Login/Login";
import styles from "./Auth.module.css";

export function Auth() {
  return (
    <div className={styles["auth-container"]}>
      <div className={styles["form-container"]}>
        <Login />
      </div>
    </div>
  );
}
