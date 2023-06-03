import React, { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import classes from './MenuItem.module.css';

const MenuItem = (props) => {
    const cartCtx = useContext(CartContext);

    const amountInputRef = useRef();

    const addMenuItemHandler = () => {

      const currentAmount = Number(amountInputRef.current.value)
      const currentAmountNumber = +currentAmount

      const itemPrice = props.price.slice(1);
      const itemPriceNumber = +itemPrice

        cartCtx.addItem({
            name: props.name,
            price: itemPriceNumber,
            id: props.id,
            amount: currentAmountNumber
        });
    };

  return (
    <div>
      <div>
        <h2>{props.price}</h2>
        <p>{props.name}</p>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
      <div>
        <input type="number" name="" id="" defaultValue='1' ref={amountInputRef}/>
        <button className={classes.button} onClick={addMenuItemHandler}>Add</button>
      </div>
    </div>
  );
};

export default MenuItem;
