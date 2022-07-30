import PropTypes from "prop-types";
import { ExternalMinor } from "@shopify/polaris-icons";
import { Icon } from "@shopify/polaris";

const styles = {
  primary: "bg-primary hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded",
  secondary:
    "flex align-items-center whitespace-nowrap hover:text-blue-700 text-primary font-bold py-2 mx-4",
};

const Button = ({ type, children }) => {
  return (
    <button className={styles[type]}>
      <span className="text-sm px-2">{children}</span>
      {type === "secondary" ? (
        <div className="text-primary">
          <Icon source={ExternalMinor} color="--p-interactive-on-dark" />
        </div>
      ) : null}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: "primary",
};

export default Button;
