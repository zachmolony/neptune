import { useCart } from "../context/cart";
import { useProducts } from "../context/products";

const Products = () => {
  const { products } = useProducts();
  const { dispatch } = useCart();

  const handleAddProduct = (product) => {
    dispatch({ type: "addProduct", payload: product });
  };
  return (
    <>
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="flex flex-col ">
        {products &&
          products.map((product) => (
            <div className="w-1/2 mx-auto">
              <img src={product.images[0]} alt="" />
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <h3>{product.price.unit_amount / 100}.00</h3>
              <button
                onClick={() => handleAddProduct(product)}
                className="bg-blue-500 hover:bg-blue-700 text-white my-2 py-2 px-4 rounded"
              >
                +
              </button>
            </div>
          ))}
      </div>{" "}
    </>
  );
};

export default Products;
