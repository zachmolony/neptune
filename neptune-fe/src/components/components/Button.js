import PropTypes from "prop-types";

const Button = ({ title }) => {
  return (
    <button className="bg-primary hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
      <span className="text-sm">{title}</span>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired
};

export default Button;
