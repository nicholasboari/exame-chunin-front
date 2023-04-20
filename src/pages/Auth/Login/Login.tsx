import { useForm } from "react-hook-form";
import { authToken, requestLogin } from "../../../util/requests";
import { useState } from "react";

import styles from "./Login.module.css";

type FormData = {
  login: string;
  password: string;
};

export function Login() {
  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit } = useForm<FormData>();

  const onsubmit = (formData: FormData) => {
    requestLogin(formData)
      .then((response) => {
        console.log(authToken(response.data));
        setHasError(false);
        console.log("sucesso", response);
      })
      .catch((error) => {
        setHasError(true);
        console.log("erro", error);
      });
  };

  return (
    <div className={styles["login-card"]}>
      <h1>LOGIN</h1>
      {hasError && (
        <div className={styles["login-notification"]}>
          Erro de autenticação!
        </div>
      )}
      <form
        onSubmit={handleSubmit(onsubmit)}
        className={styles["form-container"]}
      >
        <div>
          <input
            {...register("login")}
            type="text"
            placeholder="login"
            name="login"
            className={styles["base-input"]}
          />
        </div>
        <div>
          <input
            {...register("password")}
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
