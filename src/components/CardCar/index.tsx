import { BsCalendar, BsCarFrontFill, BsFillFuelPumpFill } from "react-icons/bs";
import { Vehicle } from "../../types/Vehicle";
import brandIcon from "../../assets/img/brand-icon.png";
import styles from "./CardCar.module.css";
import { priceFormatter } from "../../util/priceFormatter";

type Props = {
  vehicle: Vehicle;
};

export function CardCar({ vehicle }: Props) {
  return (
    <div className={styles["card-content"]}>
      <div className={styles["card-image"]}>
        <img src={vehicle.imageUrl} alt="" />
      </div>
      <div className={styles["card-description-container"]}>
        <h4>{vehicle.name}</h4>
        <div className={styles["card-details-container"]}>
          <div className={styles["card-details"]}>
            <div className={styles["card-fuel"]}>
              <BsFillFuelPumpFill size={14} />
              <strong>{vehicle.vehicleFuel}</strong>
            </div>
            <div className={styles["card-date"]}>
              <BsCalendar size={14} />
              <strong>{vehicle.year}</strong>
            </div>
            <div className={styles["card-model"]}>
              <BsCarFrontFill size={14} />
              <strong>{vehicle.vehicleModel}</strong>
            </div>
            <div className={styles["card-brand"]}>
              <img src={brandIcon} />
              <strong>{vehicle.vehicleBrand}</strong>
            </div>
          </div>
          <div className={styles["card-details-price"]}>
            <strong>{priceFormatter(vehicle?.price)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
