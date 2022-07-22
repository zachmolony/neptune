import PropTypes from "prop-types";

import { Card as PolarisCard } from "@shopify/polaris";

const CardWrapper = ({ children, title, innerTitle, actions }) => {
  return (
    <>
      <h1 className="text-2xl">{title}</h1>
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
  title: PropTypes.string.isRequired
};

export default CardWrapper;
