import PropTypes from "prop-types";

const CartItems = ({ cart }) => {
  return cart.map((product) => {
    return (
      <div className="mx-auto flex justify-between items-center  w-11/12">
        <img src={product.images[0]} alt="" className="w-1/4" />
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <h3>{product.price.unit_amount / 100}.00</h3>
        <button className="nes-btn mx-4">-</button>
        <h3 className="text-2xl font-bold">{product.quantity}</h3>
        <button className="nes-btn mx-4">+</button>
      </div>
    );
  });
};

CartItems.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default CartItems;
