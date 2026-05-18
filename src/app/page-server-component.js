import CardUser from "@/components/CardUserFlat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default async function Home() {

  let users = [];

  const response = await fetch('http://localhost:3333/user')
  if(response.ok){
    const data = await response.json();
    console.log(data);
    users = data.users;
  } else{
    const data = await response?.json();
    console.error('Erro ao buscar usuários', data);
  }

  return (
    <div>
      <Header />
      <section style={styles.section}>
        <Sidebar />
        <main>
          <h1>Home</h1>
          <p>Conteúdo da página Home</p>
          <div style={styles.container}>
        </div>
          <div style={styles.users}>
            { users.map(user => 
                <CardUser 
                  key={user.id}
                  id={user.id}
                  avatar={user.avatar}
                  name={user.name}
                  email={user.email}
                />
              )
            }
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
