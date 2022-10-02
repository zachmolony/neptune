import { useCart } from "../context/cart";
import BagIcon from "../assets/bag_icon.jpeg";

const BagButton = () => {
  const { cartSize } = useCart();
  return (
    <>
      {cartSize > 0 && (
        <div className="absolute pt-14 pl-12 nes-pointer">
          <div className="w-5 h-5 bg-black">
            <div className="text-center text-white text-sm px-1 align">{cartSize}</div>
          </div>
        </div>
      )}
      <img src={BagIcon} alt="" className="object-contain h-full py-4 nes-pointer" />
    </>
  );
};

export default BagButton;
