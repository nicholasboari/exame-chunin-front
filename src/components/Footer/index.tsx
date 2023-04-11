import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-icon"]}>
        <a href="https://linkedin.com/in/nicholasboari/" target="_new">
          <BsLinkedin size={24} color="blue" />
        </a>
        <a href="https://instagram.com/nicholasboari/" target="_new">
          <BsInstagram size={24} color="white" />
        </a>
        <a href="https://www.youtube.com/@DevDojoBrasil" target="_new">
          <BsYoutube size={24} color="red" />
        </a>
      </div>
    </div>
  );
}
