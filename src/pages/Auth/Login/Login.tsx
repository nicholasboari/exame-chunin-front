import { useForm } from "react-hook-form";
import { requestLogin } from "../../../util/requests";
import styles from "./Login.module.css";

type FormData = {
  login: string;
  password: string;
};

export function Login() {
  const { register, handleSubmit } = useForm<FormData>();

  const onsubmit = (formData: FormData) => {
    requestLogin(formData)
      .then((response) => {
        console.log("sucesso", response);
      })
      .catch((error) => {
        console.log("erro", error);
      });
  };

  return (
    <div className={styles["login-card"]}>
      <h1>LOGIN</h1>
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
