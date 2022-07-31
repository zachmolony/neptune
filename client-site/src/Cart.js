import { Link } from "react-router-dom";
import { useCart } from "./context/cart";
import CartItems from "./CartItems.js";

const Cart = () => {
  const { state } = useCart();
  console.log(state);
  return (
    <>
      <div className="mx-auto">
        {!state || state.length === 0 ? "Cart is empty" : <CartItems state={state} />}
        <div className="w-1/5 flex float-right justify-between mx-auto">
          <h2>Total</h2>
          <h3>
            {state.reduce((acc, product) => acc + product.price.unit_amount, 0) / 100}
            .00
          </h3>
        </div>
        <Link to="/checkout">
          <button className="my-4 nes-btn w-full">Checkout</button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
