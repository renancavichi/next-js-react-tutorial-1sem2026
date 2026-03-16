

export default function CardProduct({ photo, name, category, price }){

    return (
        <div style={styles.container}>
            <img 
                src={photo} 
                alt={name} 
                style={styles.image} 
            />
            <div style={styles.textContainer}>
                <h2 style={styles.title}>{name}</h2>
                <p style={styles.category}>{category}</p>
                <p style={styles.price}>R$ {price.toFixed(2)}</p>
            </div>
        </div>
    )
}
       
const styles = {
    container: {
        width: 200,
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
        borderRadius: 8
    },
    image: {
        width: 198,
        height: 198,
        borderRadius: 8,
        objectFit: "cover"
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
    },
    price: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#005f05"
    },
    category: {
        fontSize: 14,
        color: "#4b4b4b"
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 6,
        padding: 10
    }
}