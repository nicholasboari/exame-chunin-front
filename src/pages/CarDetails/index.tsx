import { BsCalendar, BsCarFrontFill, BsFillFuelPumpFill } from "react-icons/bs";
import { Navbar } from "../../components/Navbar";
import { Vehicle } from "../../types/Vehicle";
import { BASE_URL } from "../../util/requests";
import { useEffect, useState } from "react";
import { priceFormatter } from "../../util/priceFormatter";
import { useNavigate, useParams } from "react-router-dom";

import brandIcon from "../../assets/img/brand-icon.png";
import setaIcon from "../../assets/img/seta.png";
import styles from "./CarDetails.module.css";
import axios from "axios";

type UrlParams = {
  vehicleId: string;
};

export function CarDetails() {
  const { vehicleId } = useParams<UrlParams>();

  const [vehicle, setVehicle] = useState<Vehicle>();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BASE_URL}/vehicles/${vehicleId}`).then((response) => {
      setVehicle(response.data);
    });
  }, [vehicleId]);
  return (
    <div>
      <Navbar />
      <div className={styles["car-details-content"]}>
        <div className={styles["car-details-back"]}>
          <img src={setaIcon} />
          <h2 onClick={() => navigate("/")}>VOLTAR</h2>
        </div>
        <div className={styles["car-details-card"]}>
          <div>
            <div className={styles["car-details-image"]}>
              <img src={vehicle?.imageUrl} />
              <br />
              <strong>{vehicle?.name}</strong>
            </div>
            <div className={styles["car-details-price"]}>
              <span>{priceFormatter(vehicle?.price)}</span>
            </div>
          </div>
          <div className={styles["car-details-description"]}>
            <h2>Descrição</h2>
            <p>{vehicle?.description}</p>
            <div className={styles["card-details"]}>
              <div className={styles["card-fuel"]}>
                <BsFillFuelPumpFill size={14} />
                <strong>{vehicle?.vehicleFuel}</strong>
              </div>
              <div className={styles["card-date"]}>
                <BsCalendar size={14} />
                <strong>{vehicle?.year}</strong>
              </div>
              <div className={styles["card-model"]}>
                <BsCarFrontFill size={14} />
                <strong>{vehicle?.vehicleModel}</strong>
              </div>
              <div className={styles["card-brand"]}>
                <img src={brandIcon} />
                <strong>{vehicle?.vehicleBrand}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
