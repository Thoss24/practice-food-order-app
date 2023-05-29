import CartProvider from "./store/CartProvider";
import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";
import React, { useState } from "react";

function App() {

  const [isCartDisplaying, setIsCartDisplaying] = useState(false);

  let cartDisplay;

  const showCartHandler = () => {
    setIsCartDisplaying(true)
  };

  const hideCartHandler = () => {
    setIsCartDisplaying(false)
  };

  if (isCartDisplaying) {
    cartDisplay = (
      <Cart onHideCart={hideCartHandler}/>
    )
  }

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler}/>
      <Menu />
      {cartDisplay}
    </CartProvider>
  );
}

export default App;
