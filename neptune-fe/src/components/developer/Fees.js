import PropTypes from "prop-types";
import { LineChart } from "@stripe/ui-extension-sdk/ui";

const Fees = ({ fees }) => {
  const sales = [
    {
      date: "Jan",
      sold: 1,
    },
    {
      date: "Feb",
      sold: 4,
    },
    {
      date: "Mar",
      sold: 2,
    },
    {
      date: "Apr",
      sold: 3,
    },
  ];
  return (
    <>
      <h3 className="text-2xl text-primary">£{fees / 100}.00</h3>
    </>
  );
};

Fees.propTypes = {
  fees: PropTypes.number.isRequired,
};

export default Fees;
