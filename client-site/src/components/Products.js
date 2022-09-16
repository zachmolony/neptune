import { useCart } from "../context/cart";
import { useProducts } from "../context/products";

const Products = () => {
  const { products } = useProducts();
  const { addProduct } = useCart();

  return (
    <>
      <div className="flex flex-col ">
        {products &&
          products.map((product) => (
            <div className="w-1/2 mx-auto">
              <img src={product.images[0]} alt="" />
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <h3>{product.price.unit_amount / 100}.00</h3>
              <button onClick={() => addProduct(product.id)} className="my-2 nes-btn">
                Add to Bag
              </button>
            </div>
          ))}
      </div>{" "}
    </>
  );
};

export default Products;
