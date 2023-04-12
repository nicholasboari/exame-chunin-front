import { BsCalendar, BsCarFrontFill, BsFillFuelPumpFill } from "react-icons/bs";
import brandIcon from "../../assets/img/brand-icon.png";
import styles from "./CardCar.module.css";

export function CardCar() {
  return (
    <div className={styles["card-content"]}>
      <div className={styles["card-image"]}>
        <img
          src="https://www.pngmart.com/files/10/Kia-Car-PNG-File.png"
          alt=""
        />
      </div>
      <div className={styles["card-description-container"]}>
        <h4>Polo Track</h4>
        <div className={styles["card-details-container"]}>
          <div className={styles["card-details"]}>
            <div className={styles["card-fuel"]}>
              <BsFillFuelPumpFill size={14} />
              <strong>Gasolina</strong>
            </div>
            <div className={styles["card-date"]}>
              <BsCalendar size={14} />
              <strong>2023</strong>
            </div>
            <div className={styles["card-model"]}>
              <BsCarFrontFill size={14} />
              <strong>Sedan</strong>
            </div>
            <div className={styles["card-brand"]}>
              <img src={brandIcon} />
              <strong>Volkswagen</strong>
            </div>
          </div>
          <div className={styles["card-details-price"]}>
            <strong>R$199.999,00</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
