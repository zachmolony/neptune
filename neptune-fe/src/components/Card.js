import PropTypes from "prop-types";

const Card = ({ children, title }) => {
  return (
    <>
      <div className="py-4 h-full">
        <h1 className="text-2xl">{title}</h1>
        <div className="py-2 h-full">
          <div className="container grow bg-white w-full h-full rounded-lg">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default Card;
