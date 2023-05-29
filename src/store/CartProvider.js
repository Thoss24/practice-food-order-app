import CartContext from "./cart-context";
import React, { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    console.log(action, state)

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
        updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
    } else {
        updatedItem = {...action.item};
        updatedItems = state.items.concat(action.item);
    }
    return {
        items: updatedItems
    };

};

const CartProvider = (props) => {
    const [cartState, setCartState] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = (item) => {
        setCartState({
            type: 'ADD',
            item: item
        });
        console.log(cartState)
    };

    const removeItemHandler = (id) => {
        setCartState({
            type: 'REMOVE',
            id: id
        });
    };

    const cartContext = {
        totalAmount: cartState.totalAmount,
        items: cartState.items,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider