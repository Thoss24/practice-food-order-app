import React, { useContext, Fragment } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const hideCartHandler = () => {
    props.onHideCart();
  };

  return (
    <Fragment>
      <div className={classes.backdrop} />
      <div className={classes["cart-container"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            price={item.price}
            name={item.name}
            totalAmount={item.amount}
          />
        ))}
        <button className={classes.order} onClick={hideCartHandler}>
          Order
        </button>
      </div>
    </Fragment>
  );
};

export default Cart;
