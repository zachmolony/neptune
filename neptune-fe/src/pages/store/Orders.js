import React from "react";
import PropTypes from "prop-types";
import { Layout, Page } from "@shopify/polaris";
import PageHeading from "../../components/PageHeading";
import CardWrapper from "../../components/CardWrapper";
import { useOrders } from "../../context/orders";
import Loading from "../../components/atoms/Loading";
import UnshippedOrders from "../../components/store/UnshippedOrders.js";
import ShippedOrders from "../../components/store/ShippedOrders";
import SelectedOrder from "../../components/store/SelectedOrder.js";

const Orders = () => {
  const { orders } = useOrders();
  const unshippedOrders = orders?.filter((order) => order.status === "unshipped");
  const selectedOrder = orders?.find((order) => order.status === "inprogress");
  const shippedOrders = orders?.filter((order) => order.status === "shipped");
  return (
    <Page fullWidth>
      <PageHeading title="Orders" brand="Outer Limits Studios" />
      <Layout>
        <Layout.Section oneThird>
          <CardWrapper title="Needs Shipping" buttonTitle={"Add Order"}>
            {unshippedOrders ? <UnshippedOrders orders={unshippedOrders} /> : <Loading />}
          </CardWrapper>
        </Layout.Section>
        <Layout.Section oneThird>
          <CardWrapper title="Selected" buttonTitle={"Add Order"}>
            {selectedOrder ? <SelectedOrder orders={selectedOrder} /> : <Loading />}
          </CardWrapper>
        </Layout.Section>
        <Layout.Section oneThird>
          <CardWrapper title="Shipped" buttonTitle={"Add Order"}>
            {shippedOrders ? <ShippedOrders orders={shippedOrders} /> : <Loading />}
          </CardWrapper>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

Orders.propTypes = {
  isActive: PropTypes.bool,
};

export default Orders;
