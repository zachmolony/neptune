import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductsContext = createContext({});

const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a CountProvider");
  }
  return context;
};

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = () => {
      axios({
        method: "get",
        url: "http://localhost:4242/products",
      }).then(function (response) {
        setProducts(response.data);
      });
    };

    getProducts();
  }, []);

  const contextValue = {
    products,
  };
  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
};

export { ProductsProvider, useProducts };
