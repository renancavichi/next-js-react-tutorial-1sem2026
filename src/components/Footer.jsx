import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={styles.container}>
      <h3>© 2026 Renan Cavichi. Todos os direitos reservados.</h3>
      <Logo />
    </footer>
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
};
