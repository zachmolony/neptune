import PropTypes from "prop-types";
import { Badge } from "@shopify/polaris";
import { formatCurrency } from "../../utils/formatting";

const Fees = ({ fees, recentFee }) => {
  return (
    <div className="w-100">
      <h3 className="-my-2 mb-1 flex items-center">
        <span className="text-2xl text-primary mr-2">{formatCurrency(fees)}</span>
        <span className="text-sm text-green-500!">
          <Badge status="success" className="mr-2">
            +{formatCurrency(recentFee.amount)}
          </Badge>{" "}
          <span className="ml-1">from Outer Limits</span>
        </span>
      </h3>
    </div>
  );
};

Fees.propTypes = {
  fees: PropTypes.number.isRequired,
};

export default Fees;
