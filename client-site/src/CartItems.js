import PropTypes from "prop-types";

const CartItems = ({ state }) => {
  return state.map((product) => {
    return (
      <div className="mx-auto flex justify-between items-center">
        <img src={product.images[0]} alt="" className="w-1/4" />
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <h3>{product.price.unit_amount / 100}.00</h3>
        <button className="w-1/12 bg-blue-500 hover:bg-blue-700 text-white my-2 py-2 px-4 rounded">
          -
        </button>
        <h3 className="text-2xl font-bold">{product.quantity}</h3>
        <button className="w-1/12 bg-blue-500 hover:bg-blue-700 text-white my-2 py-2 px-4 rounded">
          +
        </button>
      </div>
    );
  });
};

CartItems.propTypes = {
  state: PropTypes.array.isRequired,
};

export default CartItems;
