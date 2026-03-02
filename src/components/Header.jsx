export default function Header(){
    return (
        <header style={styles.container}>
            <h1>Logo</h1>
            <nav>
                <ul style={styles.nav}>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>FAQ</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}


const styles = {
    container: {
        backgroundColor: "#000",
        color: "#FFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20
    },
    nav: {
        display: "flex",
        listStyleType: "none",
        gap: 20
    }
}