import { useParallax } from "react-scroll-parallax";
import PropTypes from "prop-types";

const FeaturesContent = ({ flipped, headline, highlighted, subtitle, img, alt }) => {
  const imageScroll = useParallax({ speed: 6 });
  const textScroll = useParallax({ speed: -10 });
  return (
    <>
      <div className="w-7/12" ref={textScroll.ref}>
        <h1 className="text-6xl font-bold mb-33">
          {headline} <span className="text-primary">{highlighted}</span>.
        </h1>
        <h2 className="text-2xl text-lightGray py-2">{subtitle}</h2>
      </div>

      {flipped && (
        <div className="w-7/12 mb-64 pb-24">
          <div className="w-7/12 h-7/12">
            <img
              src={img[0]}
              alt={alt}
              style={{ maxHeight: "100%", maxWidth: "510px" }}
              className="mt-80 ml-24 z-20 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
              ref={imageScroll.ref}
            />
          </div>
        </div>
      )}

      {!flipped && (
        <div className="w-7/12 mb-64 pb-24">
          <div className="w-7/12 h-7/12">
            <div className="absolute">
              <img
                src={img[1]}
                alt={alt}
                style={{ maxHeight: "100%", maxWidth: "400px" }}
                className="ml-48 z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                ref={imageScroll.ref}
              />
            </div>
          </div>
          <div className="w-7/12 h-7/12">
            <div className="absolute">
              <img
                src={img[0]}
                alt={alt}
                style={{ maxHeight: "100%", maxWidth: "400px" }}
                className="mt-48 z-20 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                ref={imageScroll.ref}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

FeaturesContent.propTypes = {
  flipped: PropTypes.bool,
  headline: PropTypes.string,
  highlighted: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.arrayOf(PropTypes.string),
  alt: PropTypes.string,
};

export default FeaturesContent;
