import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const MenuItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addMenuItemHandler = () => {
        cartCtx.addItem({
            name: props.name,
            price: props.price,
            id: props.id,
            totalAmount: 1
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
        <button onClick={addMenuItemHandler}></button>
      </div>
    </div>
  );
};

export default MenuItem;
