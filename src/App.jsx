import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <main className="grid h-dvh grid-cols-shoppingLayout bg-whiteBg px-36 py-8">
      <Products />

      <ShoppingCart />
    </main>
  );
}

export default App;
