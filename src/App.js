import CartProvider from "./store/CartProvider";
import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";

function App() {

  return (
    <CartProvider>
      <Header />
      <Menu />
      <Cart />
    </CartProvider>
  );
}

export default App;
