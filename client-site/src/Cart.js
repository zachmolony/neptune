import { Link } from "react-router-dom";
import { useCart } from "./context/cart";
import CartItems from "./CartItems.js";

const Cart = () => {
  const { cart, cartTotal } = useCart();
  return (
    <>
      <div className="mx-auto">
        {!cart || cart.length === 0 ? "Cart is empty" : <CartItems cart={cart} />}
        <div className="w-1/5 flex float-right justify-between mx-auto">
          <h2>Total</h2>
          <h3>{cartTotal()}</h3>
        </div>
        <Link to="/checkout">
          <button className="my-4 nes-btn w-full">Checkout</button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
