import Logo from "./Logo";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Footer() {

  const router = useRouter()

  return (
    <footer style={styles.container}>
      <h3>© 2026 Renan Cavichi. Todos os direitos reservados.</h3>
      <Link href="/signup" scroll={false}>Teste</Link>
      <button type="button" onClick={() => router.push('/signup?id=5', { scroll: false })}>Signup</button>
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
