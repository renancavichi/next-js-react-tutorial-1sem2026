'use client'
import { useState } from "react"

export default function Contador() {
    const [count, setCount] = useState(0)

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Contador</h1>
            <p style={styles.value}>{count}</p>
            <div style={styles.buttons}>
                <button type="button" style={styles.button} onClick={() => {setCount(count - 1); console.log(count)}}>-</button>
                <button type="button" style={styles.button} onClick={() => {setCount(count + 1); console.log(count)}}>+</button>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 20,
        gap: 20
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    value: {
        fontSize: 24,
        fontWeight: "bold"
    },
    buttons: {
        display: "flex",
        gap: 10
    },
    button: {
        width: 40,
        height: 40,
        fontSize: 18,
        fontWeight: "bold",
        borderRadius: 4,
        border: "1px solid #ccc",
        cursor: "pointer"
    }
}