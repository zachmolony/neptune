import React from "react";
import PropTypes from "prop-types";
import CardWrapper from "../../components/CardWrapper";
import ScreenWrapper from "../../components/ScreenWrapper";

const DeveloperDashboard = () => {
  return (
    <>
      <ScreenWrapper>
        <h1>Dashboard</h1>
        <CardWrapper>Yeah</CardWrapper>
      </ScreenWrapper>
    </>
  );
};

DeveloperDashboard.propTypes = {
  isActive: PropTypes.bool
};

export default DeveloperDashboard;
