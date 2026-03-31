import { FaTrashAlt, FaUserEdit  } from "react-icons/fa";
import { useState } from "react";

export default function CardUser({ id, avatar, name, email, users, setUsers }) {

      const [modal, setModal] = useState(false);

      const [nameUser, setNameUser] = useState(name);
      const [emailUser, setEmailUser] = useState(email);
      const [passUser, setPassUser] = useState("");
      const [avatarUser, setAvatarUser] = useState(avatar);

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:3333/user/${id}`, {
            method: "DELETE"
        })
        const data = await response?.json() || {};
         console.log(data);
        if(response.ok){
            alert("Usuário deletado com sucesso!");
            const usersUpdated = users.filter(user => user.id !== id);
            setUsers(usersUpdated);
        } else{
            alert("Erro ao deletar usuário: ")
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:3333/user/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nameUser,
                email: emailUser,
                ...(passUser ? {pass: passUser} : {}), // adiciona a propriedade pass apenas se pass for verdadeiro
                avatar: avatarUser
            })
        })
        const data = await response?.json() || {};
        console.log(data);
        if(response.ok){
            alert("Usuário atualizado com sucesso!");
            const usersUpdated = users.map(user => {
                if(user.id === id){
                    return {
                        ...user,
                        name: nameUser,
                        email: emailUser,
                        avatar: avatarUser
                    }
                }
                return user;
            })
            setUsers(usersUpdated);
            setModal(false);
        } else{
            alert("Erro ao atualizar usuário: ")
        }
    }

    return (
        <>
        <div style={styles.container}>
            <img 
                src={avatar} 
                alt={name} 
                style={styles.image} 
            />
            <div style={styles.actions}>
                <FaUserEdit style={styles.icons} onClick={() => setModal(true)} />
                <FaTrashAlt style={styles.icons} onClick={handleDelete} />
            </div>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div> 
        </div>
        {modal && (
            <div style={styles.modal}>
                <div style={styles.content}>
                    <h2>Editar Usuário</h2>
                    <form style={styles.form} onSubmit={handleSubmit}>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" value={nameUser} onChange={(e) => setNameUser(e.target.value)} style={styles.textInput} />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={emailUser} onChange={(e) => setEmailUser(e.target.value)} style={styles.textInput} />
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="pass" value={passUser} onChange={(e) => setPassUser(e.target.value)} style={styles.textInput} />
                        <label htmlFor="avatar">Avatar:</label>
                        <input type="text" id="avatar" name="avatar" value={avatarUser} onChange={(e) => setAvatarUser(e.target.value)} style={styles.textInput} />
                        <button type="submit">Editar</button>
                        <button type="button" onClick={() => setModal(false)}>Cancelar</button>
                    </form>
                </div>
            </div>
        )}
        </>
    )
}
       
const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
        position: "relative"
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    actions: {
        position: "absolute",
        top: 10,
        right: 10,  
        display: "flex",
        gap: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    icons: {
        cursor: "pointer",
        color: "#2c2c2c",
        width: 25,
        height: 25,
        padding: 5
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
    },
    modal: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000
    },
    content: {
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 8,
        width: 400
    }
}