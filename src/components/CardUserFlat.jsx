import { FaTrashAlt, FaUserEdit  } from "react-icons/fa"

export default function CardUser({ avatar, name, email }) {

    return (
        <div style={styles.container}>
            <img 
                src={avatar} 
                alt={name} 
                style={styles.image} 
            />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div> 
        </div>
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