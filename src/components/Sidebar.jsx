export default function Sidebar() {
  return (
    <aside style={styles.container}>
      <h2>Sidebar</h2>
      <p>Conteúdo do sidebar</p>
    </aside>
  );
}

const styles = {
  container: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    width: 250,
    height: "90vh",
    boxSizing: "border-box",
  },
};
