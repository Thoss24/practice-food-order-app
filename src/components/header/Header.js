import classes from "./Header.module.css";
import React, { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";

const Header = (props) => {

  const showCartHandler = () => {
    props.onShowCart()
  };

  const cartCtx = useContext(CartContext);

  const currentCartAmount = cartCtx.items.reduce((num, item) => {
    return num + item.amount
  }, 0)

  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes["title-container"]}>
          <h1>Food Order App</h1>
        </div>
        <div className={classes["button-container"]}>
          <button className={classes.button} onClick={showCartHandler}>Basket <div>{currentCartAmount}</div></button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
