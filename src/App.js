import CartProvider from "./store/CartProvider";
import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Button from "./components/UI/Button";
import DemoOutput from "./components/UI/DemoOutput";
import Cart from "./components/cart/Cart";
import React, { useState, useCallback } from "react";

function App() {

  const [isCartDisplaying, setIsCartDisplaying] = useState(false);

  const [paragraphDisplay, setParagraphDisplay] = useState(false);

  const [allowToggle, setAllowToggle] = useState(false)

  console.log("State re-evaluation")

  let cartDisplay;

  const showCartHandler = () => {
    setIsCartDisplaying(true)
  };

  const hideCartHandler = () => {
    setIsCartDisplaying(false)
  };

  const allowToggleHandler = () => {
    setAllowToggle(true)
  };

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setParagraphDisplay((prevPara) => !prevPara)
    }
  }, [allowToggle])

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
      {<DemoOutput showing={paragraphDisplay}></DemoOutput>}
      <Button onClick={allowToggleHandler}></Button>
      <Button onClick={toggleParagraphHandler}></Button>
    </CartProvider>
  );
}

export default App;
