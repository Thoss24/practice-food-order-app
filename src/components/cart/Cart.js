import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const hideCartHandler = () => {
    props.onHideCart();
  };

  const increaseItemAmountHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  };

  const decreaseItemAmountHandler = (id) => {
    cartCtx.removeItem(id)
  };

  return (
    <div className={classes.container}>
      <div className={classes.backdrop} />
      <div className={classes["cart-container"]}>
        {cartCtx.totalAmount === 0 ? `Basket is empty` : cartCtx.items.map((item) => (
          <CartItem
            price={item.price}
            name={item.name}
            totalAmount={item.amount}
            increaseAmount={increaseItemAmountHandler.bind(null, item)}
            decreaseAmount={decreaseItemAmountHandler.bind(null, item.id)}
          />
        ))}
        <div className={classes['checkout-container']}>
        <button className={classes.order} onClick={hideCartHandler}>
          Order
        </button>
        <div>
          {cartCtx.totalAmount}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
