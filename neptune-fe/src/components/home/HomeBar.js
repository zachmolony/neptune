import { useEffect, useState } from "react";
import HomeBarItem from "./HomeBarItem";
import TextLogo from "../../assets/TextLogo.png";

const HomeBar = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > window.innerHeight) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={fixed && "h-28"}></div>
      <div
        className={"top-0 w-full h-28 pt-12 px-12 flex justify-between z-30 " + (fixed && " fixed")}
      >
        <img src={TextLogo} alt="" className="h-full" />
        <ul className="h-full flex pt-2 drop-shadow-lg">
          <HomeBarItem title="Features" link="/" />
          <HomeBarItem title="Build" link="developer/dashboard" />
          <HomeBarItem title="Sell" link="store/dashboard" />
        </ul>
      </div>
    </>
  );
};

export default HomeBar;
