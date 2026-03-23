'use client';

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, pass, avatar);
    //TODO: Enviar os dados para o backend criar a conta do usuário
  }

  return (
    <div>
      <Header />
      <section style={styles.section}>
        <Sidebar />
        <main>
          <h1>Cadastre-se</h1>
          <p>Preencha o formulário abaixo para criar sua conta:</p>
          <form style={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} style={styles.textInput} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.textInput} />
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="pass" value={pass} onChange={(e) => setPass(e.target.value)} style={styles.textInput} />
            <label htmlFor="avatar">Avatar:</label>
            <input type="text" id="avatar" name="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} style={styles.textInput} />
            <button type="submit">Cadastrar</button>
          </form>
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    width: 300,
    marginTop: 30
  },
  textInput: {
    padding: 6,
    marginBottom: 4,
    border: "1px solid #CCC",
    borderRadius: 6
  }
};
