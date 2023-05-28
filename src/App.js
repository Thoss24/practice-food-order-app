import CartProvider from "./store/CartProvider";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <CartProvider>
      <Menu />
    </CartProvider>
  );
}

export default App;
