import Logo from "./Logo";
import { FaPhoneAlt as IconPhone, FaHome as IconHome } from "react-icons/fa";

export default function Header() {
  return (
    <header style={styles.container}>
      <Logo />
      <nav>
        <ul style={styles.nav}>
          <li style={styles.item}>
            <IconHome /> Home
          </li>
          <li style={styles.item}>Sobre</li>
          <li style={styles.item}>FAQ</li>
          <li style={styles.item}>
            <IconPhone /> Contato
          </li>
          <li style={styles.item}><button type="button">Cadastre-se</button></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  // CSS-in-JS
  container: {
    backgroundColor: "#000",
    color: "#FFF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  nav: {
    display: "flex",
    listStyleType: "none",
    gap: 20,
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
};
