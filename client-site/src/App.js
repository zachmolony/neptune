import { useNavigate, Outlet } from "react-router-dom";
import { ProductsProvider } from "./context/products";
import { CartProvider } from "./context/cart.js";

import BagIcon from "./assets/bag_icon.jpeg";
import MenuIcon from "./assets/menu_icon.webp";
import Logo from "./assets/outerlimitslogo.png";

import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <div className="container w-screen h-screen">
            <div className="flex w-2/5 h-32 mx-auto pt-8 justify-between">
              <div className="h-full">
                <img
                  src={MenuIcon}
                  alt=""
                  className="object-contain h-full py-6"
                />
              </div>
              <div className="h-full">
                <img
                  src={Logo}
                  alt=""
                  onClick={() => navigate("/products")}
                  className="object-contain h-full pl-4"
                />
              </div>
              <div className="h-full">
                <img
                  src={BagIcon}
                  alt=""
                  onClick={() => navigate("/cart")}
                  className="object-contain h-full py-4"
                />
              </div>
            </div>

            <div className="w-1/2 mx-auto text-center">
              <Outlet />
            </div>
          </div>
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
