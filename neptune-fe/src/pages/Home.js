import { Link } from "react-router-dom";

import Stars from "../assets/stars.webp";
import NeptuneLogo from "../assets/planet.jpeg";
import Rocketship from "../assets/rocket.jpeg";
import Performance from "../assets/performance.jpeg";
import Tools from "../assets/tools.jpeg";

import HomeBar from "../components/home/HomeBar";
import SalesContent from "../components/home/SalesContent";
import PageWrapper from "../components/home/PageWrapper";
import Footer from "../components/Footer";

const content = {
  build: {
    headline: "Build and ship e-commerce sites that ",
    highlighted: "scale.",
    img: Rocketship,
    alt: "Rocket ship",
    subtitle:
      "Neptune helps you scale client websites with increacing user bases."
  },
  performance: {
    headline: "Fees that work for both your client, and ",
    highlighted: "you.",
    img: Performance,
    alt: "Performance Graph",
    subtitle:
      "Neptune’s application-based fee model enables you to charge fees that scale with usage. "
  },
  tools: {
    headline: "Manage multiple clients from the ",
    highlighted: "same place.",
    img: Tools,
    alt: "Tools",
    subtitle:
      "Neptune’s developer interface makes it easy to manage multiple client platforms."
  }
};

const Home = () => {
  return (
    <>
      <div className="h-full w-full bg-secondary text-white">
        <img
          src={Stars}
          alt=""
          className="w-full h-screen opacity-40 absolute object-cover"
        />

        <div className="w-full h-screen absolute flex">
          <div className="w-full relative">
            <div className="h-full flex">
              <img
                src={NeptuneLogo}
                alt="Planet Neptune"
                className="relative top-1/2 -translate-y-1/2 mx-auto max-h-sm justify-center h-1/2"
              />
            </div>
          </div>
        </div>
        <div className="h-screen m-auto xl:max-w-screen-2xl flex">
          <div className="w-full h-4/5 mx-12 my-auto z-10 relative flex">
            <div className="w-1/2">
              <h1 className="p-32 font-bold text-6xl">
                Welcome to <strong className="font-black">Neptune.</strong>
              </h1>
            </div>
            <div className="w-1/2 mt-auto 2xl:pl-32">
              <h2 className="pl-24 pr-8 lg:pl-32 ml-12 pb-32 font-bold text-2xl">
                The e-commerce platform built by developers, for developers.
              </h2>
            </div>
          </div>
        </div>
        <HomeBar />

        <PageWrapper>
          <SalesContent {...content.build} />
        </PageWrapper>

        <PageWrapper>
          <SalesContent {...content.performance} flipped />
        </PageWrapper>

        <PageWrapper>
          <SalesContent {...content.tools} />
        </PageWrapper>

        <PageWrapper>
          <div className="w-7/12">
            <h1 className="text-6xl font-bold mb-33">
              E-commerce development made simple.{" "}
              <span className="text-primary">That’s Neptune.</span>
            </h1>
            <h2 className="text-2xl text-lightGray">
              Register for the Beta{" "}
              <Link to="/" className="text-primary underline">
                here.
              </Link>
            </h2>
          </div>

          {true && (
            <div className="w-5/12 h-1/2 justify-center flex items-center">
              <img
                src={NeptuneLogo}
                alt={"alt"}
                style={{ maxHeight: "100%" }}
              />
            </div>
          )}
        </PageWrapper>

        <Footer />
      </div>
    </>
  );
};

export default Home;
