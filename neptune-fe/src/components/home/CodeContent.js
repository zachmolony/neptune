import { useParallax } from "react-scroll-parallax";
import PropTypes from "prop-types";
import { TypeAnimation } from "react-type-animation";

const CodeContent = ({ flipped, headline, highlighted, subtitle }) => {
  const textScroll = useParallax({ speed: -10 });
  return (
    <>
      {flipped && (
        <div className="w-7/12 pb-8 -ml-8">
          <div className="w-11/12 h-7/12 bg-quaternary rounded-3xl">
            <h1 className="p-4 font-mono text-lg">
              <TypeAnimation
                sequence={[
                  "import { useCart } from 'neptune-dev-kit'",
                  1000,
                  "import { useOrders } from 'neptune-dev-kit'",
                  2000,
                  "import { useProducts } from 'neptune-dev-kit'",
                  3000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </h1>
          </div>
        </div>
      )}

      <div className="w-7/12" ref={textScroll.ref}>
        <h1 className="text-6xl font-bold mb-33">
          {headline} <span className="text-primary">{highlighted}</span>.
        </h1>
        <h2 className="text-2xl text-lightGray py-2">{subtitle}</h2>

        <h3 className="text-xl text-lightGray">
          Check out{" "}
          <a href="https://neptune-dev-kit.netlify.app/" className="text-primary underline">
            the docs.
          </a>
        </h3>
      </div>
    </>
  );
};

CodeContent.propTypes = {
  flipped: PropTypes.bool,
  headline: PropTypes.string,
  highlighted: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.arrayOf(PropTypes.string),
  alt: PropTypes.string,
};

export default CodeContent;
