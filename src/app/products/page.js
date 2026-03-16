import CardProduct from "@/components/CardProduct";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <section style={styles.section}>
        <Sidebar />
        <main>
          <h1>Produtos</h1>
          <p>Confira a lista de produtos:</p>
          <div style={styles.products}>
            <CardProduct 
              photo="https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/yIa8STLMmCyhj48fGDpaAuRM.jpg?w=440"
              name="Horizon F. West"
              category="Aventura e Ação"
              price={199.99}
            />
            <CardProduct 
              photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4IBEo-Aj41ilO-qCbwH9jo2YTzOAhE0fgMsNLwxDrkeY1oYTyj-kVxYyzMG353H3NouITCQ&s=10"
              name="Zelda: B. Wild"
              category="Aventura e Ação"
              price={359.99}
            />
            <CardProduct 
              photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJeLIw3n4JWiomUtUK1-ObDFTZX5zftaoDgA&s"
              name="Crimson Desert"
              category="Aventura e Ação"
              price={399.99}
            />
            <CardProduct 
              photo="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/capsule_616x353.jpg?t=1750105817"
              name="Horizon: Zero Down"
              category="Aventura e Ação"
              price={129.99}
            />
            <CardProduct 
              photo="https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/yIa8STLMmCyhj48fGDpaAuRM.jpg?w=440"
              name="Horizon F. West"
              category="Aventura e Ação"
              price={199.99}
            />
            <CardProduct 
              photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4IBEo-Aj41ilO-qCbwH9jo2YTzOAhE0fgMsNLwxDrkeY1oYTyj-kVxYyzMG353H3NouITCQ&s=10"
              name="Zelda: B. Wild"
              category="Aventura e Ação"
              price={359.99}
            />
            <CardProduct 
              photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJeLIw3n4JWiomUtUK1-ObDFTZX5zftaoDgA&s"
              name="Crimson Desert"
              category="Aventura e Ação"
              price={399.99}
            />
            <CardProduct 
              photo="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/capsule_616x353.jpg?t=1750105817"
              name="Horizon: Zero Down"
              category="Aventura e Ação"
              price={129.99}
            />
            <CardProduct 
              photo="https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/yIa8STLMmCyhj48fGDpaAuRM.jpg?w=440"
              name="Horizon F. West"
              category="Aventura e Ação"
              price={199.99}
            />
            <CardProduct 
              photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4IBEo-Aj41ilO-qCbwH9jo2YTzOAhE0fgMsNLwxDrkeY1oYTyj-kVxYyzMG353H3NouITCQ&s=10"
              name="Zelda: B. Wild"
              category="Aventura e Ação"
              price={359.99}
            />
            <CardProduct 
              photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJeLIw3n4JWiomUtUK1-ObDFTZX5zftaoDgA&s"
              name="Crimson Desert"
              category="Aventura e Ação"
              price={399.99}
            />
            <CardProduct 
              photo="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/capsule_616x353.jpg?t=1750105817"
              name="Horizon: Zero Down"
              category="Aventura e Ação"
              price={129.99}
            />
            <CardProduct 
              photo="https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/yIa8STLMmCyhj48fGDpaAuRM.jpg?w=440"
              name="Horizon F. West"
              category="Aventura e Ação"
              price={199.99}
            />
            <CardProduct 
              photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4IBEo-Aj41ilO-qCbwH9jo2YTzOAhE0fgMsNLwxDrkeY1oYTyj-kVxYyzMG353H3NouITCQ&s=10"
              name="Zelda: B. Wild"
              category="Aventura e Ação"
              price={359.99}
            />
            <CardProduct 
              photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJeLIw3n4JWiomUtUK1-ObDFTZX5zftaoDgA&s"
              name="Crimson Desert"
              category="Aventura e Ação"
              price={399.99}
            />
            <CardProduct 
              photo="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/capsule_616x353.jpg?t=1750105817"
              name="Horizon: Zero Down"
              category="Aventura e Ação"
              price={129.99}
            />
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
  products: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20
  }
};
