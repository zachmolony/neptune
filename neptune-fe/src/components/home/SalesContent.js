const SalesContent = ({
  flipped,
  headline,
  highlighted,
  subtitle,
  img,
  alt
}) => {
  return (
    <>
      {!flipped && (
        <div className="w-5/12 h-4/5 justify-center flex items-center px-24">
          <img
            src={img}
            alt="Planet Neptune"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
      )}
      <div className="w-7/12">
        <h1 className="text-6xl font-bold mb-33">
          {headline} <span className="text-primary">{highlighted}</span>
        </h1>
        <h2 className="text-2xl text-lightGray">{subtitle}</h2>
      </div>

      {flipped && (
        <div className="w-5/12 h-1/2 justify-center flex items-center">
          <img src={img} alt={alt} style={{ maxHeight: "100%" }} />
        </div>
      )}
    </>
  );
};

export default SalesContent;
