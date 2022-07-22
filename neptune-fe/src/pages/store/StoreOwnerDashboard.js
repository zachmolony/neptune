import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card";
import ScreenWrapper from "../../components/ScreenWrapper";
import Divider from "../../components/Divider";

const StoreOwnerDashboard = () => {
  return (
    <>
      <div className="px-16 py-8 w-full h-full text-darkGray">
        <h1 className="w-full py-4 text-3xl font-bold">
          Outer Limits' Webstore
        </h1>
        <Divider />
        <div className="flex h-full">
          <column className="flex w-2/3 h-full pr-6">
            <div className="w-full h-full">
              <Card title={"Recent Orders"}>yeahs</Card>
            </div>
          </column>
          <column className="w-1/3 flex flex-col">
            <div className="w-full h-1/5">
              <Card title={"My Site"}>Yeah</Card>
            </div>
            <div className="w-full h-2/5">
              <Card title={"Sales"}>Yeah</Card>
            </div>
            <div className="w-full h-2/5">
              <Card title={"Upcoming Drops"}>Yeah</Card>
            </div>
          </column>
        </div>
      </div>
    </>
  );
};

StoreOwnerDashboard.propTypes = {
  isActive: PropTypes.bool
};

export default StoreOwnerDashboard;
