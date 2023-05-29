import React, { useContext, Fragment} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = () => {

    const cartCtx = useContext(CartContext);

    return (
        <Fragment>
            {cartCtx.items.map((item) => (
                <CartItem 
                price={item.price}
                name={item.name}
                totalAmount={item.amount}/>
            ))}
        </Fragment>
    )
};

export default Cart