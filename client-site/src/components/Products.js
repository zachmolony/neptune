import { useState } from "react";
import { useCart } from "../context/cart";
import { useProducts } from "../context/products";

const Products = () => {
  const { products } = useProducts();
  const { addProduct } = useCart();
  const [isToastActive, setIsToastActive] = useState(false);

  const addedToCartNotification = () => {
    setIsToastActive(true);
    setTimeout(() => {
      setIsToastActive(false);
    }, 2000);
  };

  const handleAddProduct = (product) => {
    addProduct(product);
    addedToCartNotification();
  };

  return (
    <>
      <div
        className={`absolute top-10 right-10 translate-x- transition-all ${
          !isToastActive && " translate-x-64"
        }`}
      >
        <div className="nes-balloon from-right">
          <p>Cart Updated</p>
        </div>
      </div>
      <div className="flex flex-col">
        {products &&
          products.map((product) => (
            <div className="w-1/2 mx-auto">
              <img src={product.images[0]} alt="" />
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <h3>{product.price.unit_amount / 100}.00</h3>
              <button onClick={() => handleAddProduct(product)} className="my-2 nes-btn">
                Add to Bag
              </button>
            </div>
          ))}
      </div>{" "}
    </>
  );
};

export default Products;
