import Header from "@/components/Header"

const nome = "Renan Cavichi"

export default function Home(){
    return (
      <div>
        <Header />
        <h1>Olá Mundo React! Bem-vindo {nome}</h1>
      </div>
    )
}