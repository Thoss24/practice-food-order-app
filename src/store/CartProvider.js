import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {

    const currentTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    console.log(currentTotalAmount)

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: currentTotalAmount
    };
  };

  if (action.type === 'REMOVE') {
    const cartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

    const currentTotalAmount = state.totalAmount - state.items[cartItemIndex].price

    let cartItem = state.items[cartItemIndex];

    let updatedItems

    if (cartItem.amount > 1) {
        const updatedItem = {
            ...cartItem,
            amount: cartItem.amount - 1
        };
        updatedItems = [...state.items];

        updatedItems[cartItemIndex] = updatedItem
    }

    return {
        items: updatedItems,
        totalAmount: currentTotalAmount
    }
  }
  return defaultCartState
};

const CartProvider = (props) => {
  const [cartState, setCartState] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    setCartState({
      type: "ADD",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    setCartState({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
