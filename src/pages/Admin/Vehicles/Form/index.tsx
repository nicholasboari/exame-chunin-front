import { useForm } from "react-hook-form";
import { Navbar } from "../../../../components/Navbar";

import styles from "./Form.module.css";
import { requestBackend, requestLogin } from "../../../../util/requests";
import { AxiosRequestConfig } from "axios";
import { Vehicle } from "../../../../types/Vehicle";
import { useNavigate } from "react-router-dom";

export function Form() {
  const { register, handleSubmit } = useForm<Vehicle>();

  const navigate = useNavigate();

  const onsubmit = (formData: Vehicle) => {
    const config: AxiosRequestConfig = {
      method: "post",
      url: "/vehicles",
      data: formData,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      console.log(response);
      navigate("/");
    });
  };
  return (
    <>
      <Navbar />
      <div className={styles["container"]}>
        <h1>Dados do veiculo</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className={styles["form-container"]}>
            <div className={styles["form-input-container"]}>
              <input
                {...register("name")}
                type="text"
                className={styles["base-input"]}
                placeholder="Nome do veículo"
              />
              <input
                {...register("year")}
                type="number"
                className={styles["base-input"]}
                placeholder="Ano do veículo"
              />
              <input
                {...register("price")}
                type="number"
                className={styles["base-input"]}
                placeholder="Preço do veículo"
              />
              <input
                {...register("imageUrl")}
                type="text"
                className={styles["base-input"]}
                placeholder="Link da imagem"
              />
              <select
                className={styles["base-input"]}
                {...register("vehicleType")}
              >
                <option defaultValue={""} disabled selected>
                  Selecione o tipo do veículo
                </option>
                <option value="CAR">CARRO</option>
                <option value="MOTORCYCLE">MOTO</option>
              </select>

              <select
                className={styles["base-input"]}
                {...register("vehicleBrand")}
              >
                <option defaultValue={""} disabled selected>
                  Selecione o fabricante
                </option>
                <option value="TOYOTA">TOYOTA</option>
                <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                <option value="FORD">FORD</option>
                <option value="HONDA">HONDA</option>
                <option value="CHEVROLET">CHEVROLET</option>
                <option value="NISSAN">NISSAN</option>
                <option value="HYUNDAI">HYUNDAI</option>
                <option value="MERCEDES_BENZ">MERCEDES BENZ</option>
                <option value="BMW">BMW</option>
                <option value="AUDI">AUDI</option>
              </select>
              <select
                className={styles["base-input"]}
                {...register("vehicleModel")}
              >
                <option defaultValue={""} disabled selected>
                  Selecione o modelo
                </option>
                <option value="SEDAN">SEDAN</option>
                <option value="SUV">SUV</option>
                <option value="HATCH">HATCH</option>
                <option value="PICAPE">PICAPE</option>
              </select>
              <select
                className={styles["base-input"]}
                {...register("vehicleFuel")}
              >
                <option defaultValue={""} disabled selected>
                  Selecione o combustivel
                </option>
                <option value="GASOLINE">GASOLINA</option>
                <option value="ETHANOL">ETANOL</option>
                <option value="DIESEL">DIESEL</option>
                <option value="ELETRIC">ELETRICO</option>
              </select>
            </div>
            <textarea
              {...register("description")}
              placeholder="Descrição do veículo (máx 350)"
              maxLength={450}
            ></textarea>
          </div>
          <button>Adicionar</button>
        </form>
      </div>
    </>
  );
}
