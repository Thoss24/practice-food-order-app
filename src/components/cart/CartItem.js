
const CartItem = (props) => {
    return (
        <div>
            <div>
                <h2>{props.name}</h2>
                <p>{props.price}</p>
                <p>{props.amount}</p>
                <p>x {props.totalAmount}</p>
            </div>
            <div>
                <button onClick={props.decreaseAmount}>-</button>
                <button onClick={props.increaseAmount}>+</button>
            </div>
        </div>
    );
};

export default CartItem