import { Link } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import Stars from "../assets/stars.webp";
import NeptuneLogo from "../assets/planet.jpeg";
import Rocketship from "../assets/rocket.jpeg";
import Performance from "../assets/performance.jpeg";
import Tools from "../assets/tools.jpeg";
import DashboardImage from "../assets/ss_dashboard.png";
import OrdersImage from "../assets/ss_orders.png";
import DeveloperImage from "../assets/ss_developer.png";

import HomeBar from "../components/home/HomeBar";
import SalesContent from "../components/home/SalesContent";
import PageWrapper from "../components/home/PageWrapper";
import Footer from "../components/home/Footer";
import Features from "../components/home/Features";
import FeaturesContent from "../components/home/FeaturesContent";
import CodeContent from "../components/home/CodeContent";

const content = {
  build: {
    headline: "Launch websites that generate  ",
    highlighted: "passive income",
    img: Rocketship,
    alt: "Rocket ship",
    subtitle:
      "Everything your client needs to build and manage their business - while earning you revenue.",
  },
  performance: {
    headline: "Fees that work for both your client, and ",
    highlighted: "you",
    img: Performance,
    alt: "Performance Graph",
    subtitle:
      "Neptune’s micro-commission model enables you to take a cut of transactions on your client's site. ",
  },
  // tools: {
  //   headline: "Manage multiple clients from the ",
  //   highlighted: "same place",
  //   img: Tools,
  //   alt: "Tools",
  //   subtitle:
  //     "Neptune’s developer interface makes it easy to build and manage multiple client platforms at a time.",
  // },
};

const codeContent = {
  headline: "All the tools you need to build ",
  highlighted: "your way",
  img: Tools,
  alt: "Tools",
  subtitle: "Neptune’s developer tool kit handles all the heavy lifting, without restricting you.",
};

const features = {
  interface: {
    headline: "Everything your client needs to ",
    highlighted: "get selling",
    img: [OrdersImage, DashboardImage],
    alt: "Tools",
    subtitle:
      "Neptune allows your client to ship products, manage inventory, and more - all from a simple dashboard.",
  },
  developer: {
    headline: "Everything you need to ",
    highlighted: "start earning",
    img: [DeveloperImage],
    alt: "Tools",
    subtitle:
      "Neptune allows you to manage your fees, websites, and communicate with clients.",
  },
};

const Home = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  const planetScroll = useParallax({ speed: 4, translateY: [20, -110] });
  const landingTextScroll = useParallax({ speed: 10 });

  const imageScroll = useParallax({ speed: 10 });
  const textScroll = useParallax({ speed: -10 });
  return (
    <>
      <ReactLenis root>
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
                  ref={planetScroll.ref}
                  className="relative top-1/2 -translate-y-1/2 mx-auto max-h-sm justify-center h-1/2"
                />
              </div>
            </div>
          </div>
          <div className="h-screen m-auto xl:max-w-screen-2xl flex">
            <div
              className="w-full h-4/5 mx-12 my-auto z-10 relative flex"
              ref={landingTextScroll.ref}
            >
              <div className="w-1/2">
                <h1 className="p-32 font-bold text-6xl xl:text-7xl">
                  Welcome to <strong className="font-black">Neptune.</strong>
                </h1>
              </div>
              <div className="w-1/2 mt-auto 2xl:pl-32">
                <h2 className="pl-24 pr-8 lg:pl-32 ml-12 pb-32 font-bold text-2xl">
                  The free e-commerce platform built by developers, for
                  developers.
                </h2>
              </div>
            </div>
          </div>
          <HomeBar />

          {Object.keys(content).map((page, index) => (
            <PageWrapper>
              <SalesContent {...content[page]} flipped={!!(index % 2)} />
            </PageWrapper>
          ))}

          <PageWrapper>
            <CodeContent {...codeContent} flipped />
          </PageWrapper>

          {Object.keys(features).map((page, index) => (
            <PageWrapper>
              <FeaturesContent {...features[page]} flipped={!!(index % 2)} />
            </PageWrapper>
          ))}

          {false && (
            <PageWrapper>
              <Features />
            </PageWrapper>
          )}

          <PageWrapper>
            {true && (
              <div className="w-5/12 h-1/2 justify-center flex items-center">
                <img
                  src={NeptuneLogo}
                  alt={"alt"}
                  ref={imageScroll.ref}
                  style={{ maxHeight: "100%" }}
                />
              </div>
            )}

            <div className="w-7/12" ref={textScroll.ref}>
              <h1 className="text-6xl font-bold mb-33">
                E-commerce made simple.{" "}
                <span className="text-primary">That’s Neptune.</span>
              </h1>
              <h2 className="text-2xl text-lightGray">
                Register for the Beta{" "}
                <Link to="/" className="text-primary underline">
                  here.
                </Link>
              </h2>
            </div>
          </PageWrapper>

          <Footer />
        </div>
      </ReactLenis>
    </>
  );
};

export default Home;
