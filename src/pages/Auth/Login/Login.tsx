import { useForm } from "react-hook-form";
import { requestLogin } from "../../../util/requests";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authToken } from "../../../util/storage";

import styles from "./Login.module.css";

type Credentials = {
  login: string;
  password: string;
};

export function Login() {
  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit } = useForm<Credentials>();

  const navigate = useNavigate();

  const onsubmit = (formData: Credentials) => {
    requestLogin(formData)
      .then((response) => {
        authToken(response.data);
        setHasError(false);
        navigate("/");
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
