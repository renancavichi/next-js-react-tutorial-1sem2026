import CardUser from "@/components/CardUser";
import Contador from "@/components/Contador";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <section style={styles.section}>
        <Sidebar />
        <main>
          <h1>Home</h1>
          <p>Conteúdo da página Home</p>

          <Contador />
          <Contador />
          <br /> 
 <br />  <br />   

          <Image
            src="img/bot.svg"
            alt="Bot"
            width={200}
            height={200}
          />
          <div style={styles.users}>
            <CardUser
              avatar="https://github.com/renancavichi.png"
              name="Renan Cavichi"
              email="renancavichi@gmail.com"
            />
            <CardUser
              avatar="https://github.com/maria.png"
              name="Maria Silva"
              email="mariasilva@gmail.com"
            />
            <CardUser
              avatar="https://github.com/joaoroberto.png"
              name="João Roberto"
              email="joaoroberto@gmail.com"
            />
            <CardUser
              avatar="https://github.com/camila.png"
              name="Camila Santos"
              email="camilasantos@gmail.com"
            />
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
  users: {
    display: "flex",
    flexDirection: "column",
    gap: 20
  }
};
