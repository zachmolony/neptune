import { useNavigate, Outlet } from "react-router-dom";
import { ProductsProvider } from "./context/products";
import { CartProvider } from "./context/cart.js";

import BagButton from "./components/BagButton";
import MenuIcon from "./assets/menu_icon.webp";
import Logo from "./assets/hands_pixels.png";

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
                <img src={MenuIcon} alt="" className="object-contain h-full py-6 nes-pointer" />
              </div>
              <div className="h-full">
                <img
                  src={Logo}
                  alt=""
                  onClick={() => navigate("/products")}
                  className="object-contain h-full nes-pointer"
                />
              </div>
              <div className="h-full" onClick={() => navigate("/cart")}>
                <BagButton />
              </div>
            </div>

            <div className="w-5/12 my-6 mx-auto text-center">
              <Outlet />
            </div>
          </div>
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
