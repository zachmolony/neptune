import { useParallax } from "react-scroll-parallax";

const SalesContent = ({
  flipped,
  headline,
  highlighted,
  subtitle,
  img,
  alt
}) => {
  const imageScroll = useParallax({ speed: 6 });
  const textScroll = useParallax({ speed: -10 });
  return (
    <>
      {!flipped && (
        <div className="w-5/12 h-4/5 justify-center flex items-center px-24">
          <img
            src={img}
            alt={alt}
            ref={imageScroll.ref}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
      )}
      <div className="w-7/12" ref={textScroll.ref}>
        <h1 className="text-6xl font-bold mb-33">
          {headline} <span className="text-primary">{highlighted}</span>.
        </h1>
        <h2 className="text-2xl text-lightGray py-2">{subtitle}</h2>
      </div>

      {flipped && (
        <div className="w-5/12 h-1/2 justify-center flex items-center">
          <img
            src={img}
            alt={alt}
            style={{ maxHeight: "100%" }}
            ref={imageScroll.ref}
          />
        </div>
      )}
    </>
  );
};

export default SalesContent;
