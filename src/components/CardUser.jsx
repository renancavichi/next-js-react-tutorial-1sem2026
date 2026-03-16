

export default function CardUser({ avatar, name, email }){

    // const props = {
    //      avatar: "https://github.com/renancavichi.png",
    //      name: "Renan Cavichi",
    //      email: "renancavichi@gmail.com"
    // }

    // const { avatar, name, email } = props

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
        borderRadius: 8
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40
    }
}