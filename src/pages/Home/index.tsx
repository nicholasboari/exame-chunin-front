import { CardCar } from "../../components/CardCar";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import { Vehicle } from "../../types/Vehicle";
import { Page } from "../../types/Page";
import { BASE_URL, requestBackend } from "../../util/requests";
import { isAdmin, isAuthenticated } from "../../util/auth";
import { AdminCardCar } from "../../components/AdminCardCar";
import { useForm } from "react-hook-form";

import styles from "./Home.module.css";
import axios, { AxiosRequestConfig } from "axios";

type SearchData = {
  name: string;
};

export function Home() {
  const [page, setPage] = useState<Page<Vehicle>>();

  const { register, handleSubmit, setValue } = useForm<SearchData>();

  const pageVehiclesAdmin = () => {
    return page?.content.map((vehicle) => {
      return (
        <AdminCardCar
          onOpen={() => window.open(`/vehicles/${vehicle?.id}`, "_blank")}
          vehicle={vehicle}
          key={vehicle.id}
        />
      );
    });
  };

  const pageVehiclesUser = () => {
    return page?.content.map((vehicle) => {
      return (
        <CardCar
          onOpen={() => window.open(`/vehicles/${vehicle?.id}`, "_blank")}
          vehicle={vehicle}
          key={vehicle.id}
        />
      );
    });
  };

  const onsubmit = (formData: SearchData) => {
    const config: AxiosRequestConfig = {
      url: `/vehicles/name?name=${formData.name}`,
    };
    requestBackend(config).then((response) => {
      console.log(formData);
      setPage(response.data);
    });
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/vehicles`).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.search}>
          <form
            {...register("name")}
            className={styles.form}
            onSubmit={handleSubmit(onsubmit)}
          >
            <input
              placeholder="Nome do veículo"
              type="text"
              name="name"
              required
            />
            <button type="submit">
              {" "}
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
              </svg>
            </button>
          </form>
        </div>
        <h2>{page?.totalElements} veículos encontrados</h2>
        <div className={styles["car-list-container"]}>
          <div className={styles["car-list-items"]}>
            {isAdmin() && isAuthenticated()
              ? pageVehiclesAdmin()
              : pageVehiclesUser()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
