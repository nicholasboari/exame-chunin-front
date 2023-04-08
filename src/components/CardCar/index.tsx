import { BsFillFuelPumpFill } from "react-icons/bs";
import { AiOutlineCarryOut } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
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
        <h4>Volkswagen T-CROSS 2023</h4>
        <div className={styles["card-details-container"]}>
          <div className={styles["card-details"]}>
            <div className={styles["card-fuel"]}>
              <BsFillFuelPumpFill width={10} size={14} />
              <strong>GASOLINE</strong>
            </div>
            <div className={styles["card-date"]}>
              <AiOutlineCarryOut width={10} size={14} />
              <strong>2023</strong>
            </div>
            <div className={styles["card-model"]}>
              <AiFillCar width={10} size={14} />
              <strong>SEDAN</strong>
            </div>
            <div className={styles["card-details-price"]}>R$99.999,00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
