import { BsCalendar, BsCarFrontFill, BsFillFuelPumpFill } from "react-icons/bs";
import { Navbar } from "../../components/Navbar";
import brandIcon from "../../assets/img/brand-icon.png";
import setaIcon from "../../assets/img/seta.png";
import styles from "./CarDetails.module.css";

export function CarDetails() {
  return (
    <div>
      <Navbar />
      <div className={styles["car-details-content"]}>
        <div className={styles["car-details-back"]}>
          <img src={setaIcon} />
          <h2>VOLTAR</h2>
        </div>
        <div className={styles["car-details-card"]}>
          <div>
            <div className={styles["car-details-image"]}>
              <img
                src="https://www.pngmart.com/files/10/Kia-Car-PNG-File.png"
                alt=""
              />
              <br />
              <strong>T-CROSS</strong>
            </div>
            <div className={styles["car-details-price"]}>
              <span>R$199.999,00</span>
            </div>
          </div>
          <div className={styles["car-details-description"]}>
            <h2>Descrição</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              similique quaerat recusandae quos, eum nam earum saepe optio
              itaque repellat dolores officia voluptas minus consequuntur a id
              tenetur ea nihil!
            </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
