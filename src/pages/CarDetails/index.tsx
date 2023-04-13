import setaIcon from "../../assets/img/seta.png";
import { Navbar } from "../../components/Navbar";
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
          </div>
        </div>
      </div>
    </div>
  );
}
