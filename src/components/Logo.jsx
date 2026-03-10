import styles from "./Logo.module.css"
import Image from "next/image"

export default function Logo() {
  return (
    <div className={styles.logotipo}>
      <Image
        src="https://github.com/renancavichi.png"
        alt="Logo"
        className={styles.logo}
        width={40}
        height={40}
      />{" "}
      {/* Usando a classe do CSS Module para estilizar a imagem */}
      <h1 className={styles.logo}>Renan Cavichi</h1>
    </div>
  );
}
