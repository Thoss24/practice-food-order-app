import CartProvider from "./store/CartProvider";
import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Button from "./components/UI/Button";
import DemoOutput from "./components/UI/DemoOutput";
import DemoList from "./components/UI/DemoList";
import Cart from "./components/cart/Cart";
import React, { useState, useCallback, useMemo } from "react";

function App() {

  const [isCartDisplaying, setIsCartDisplaying] = useState(false);

  const [paragraphDisplay, setParagraphDisplay] = useState(false);

  const [allowToggle, setAllowToggle] = useState(false)

  const [listTitle, setListTitle] = useState("My List")

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
  }, [allowToggle]);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title!")
  }, [])

  const listItems = useMemo(() => [5, 3, 10, 9, 1], [])

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
      <Button onClick={allowToggleHandler}>Allow toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
      <Button onClick={changeTitleHandler}>Change title</Button>
      <DemoList title={listTitle} items={listItems}></DemoList>
    </CartProvider>
  );
}

export default App;
