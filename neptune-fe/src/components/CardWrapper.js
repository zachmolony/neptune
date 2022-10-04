import PropTypes from "prop-types";
import Button from "./atoms/Button.js";
import { Card as PolarisCard } from "@shopify/polaris";

const CardWrapper = ({ children, title, innerTitle, actions, buttonTitle }) => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold items-middle" style={{ height: "37px" }}>
          {title}
        </h1>
        {buttonTitle && <Button>{buttonTitle}</Button>}
      </div>
      <div className="py-2 h-full">
        <PolarisCard title={innerTitle} actions={actions}>
          {children}
        </PolarisCard>
      </div>
    </>
  );
};

CardWrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default CardWrapper;
