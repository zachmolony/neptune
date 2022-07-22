import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card";
import ScreenWrapper from "../../components/ScreenWrapper";

const DeveloperDashboard = () => {
  return (
    <>
      <ScreenWrapper>
        <h1>Dashboard</h1>
        <Card>Yeah</Card>
      </ScreenWrapper>
    </>
  );
};

DeveloperDashboard.propTypes = {
  isActive: PropTypes.bool
};

export default DeveloperDashboard;
