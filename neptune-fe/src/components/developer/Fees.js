import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/formatting";

const Fees = ({ fees }) => {
  return (
    <>
      <h3 className="text-2xl text-primary">{formatCurrency(fees)}</h3>
    </>
  );
};

Fees.propTypes = {
  fees: PropTypes.number.isRequired,
};

export default Fees;
