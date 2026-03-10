import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <section style={styles.section}>
        <Sidebar />
        <main>
          <h1>Produtos</h1>
          <p>Confira a lista de produtos:</p>
          <div style={styles.products}>
           
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
}

const styles = {
  section: {
    display: "flex",
    gap: 20,
    padding: 20,
  },
  products: {
    display: "flex",
    flexDirection: "column",
    gap: 20
  }
};
