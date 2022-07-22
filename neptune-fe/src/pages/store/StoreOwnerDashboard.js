import React from "react";
import PropTypes from "prop-types";
import DashboardContent from "./DashboardContent";

const StoreOwnerDashboard = () => {
  return (
    <>
      <div className="px-16 py-8 w-full h-full text-darkGray">
        <DashboardContent />
      </div>
    </>
  );
};

StoreOwnerDashboard.propTypes = {
  isActive: PropTypes.bool
};

export default StoreOwnerDashboard;
