import React, { useState } from "react";
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
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { markOrderAsShipped, getOrderById, unshippedOrders, shippedOrders } = useOrders();

  const selectForShipping = async (order) => {
    const temp = await getOrderById(order[0]);
    setSelectedOrder(temp);
  };

  const completeShipping = (value) => {
    markOrderAsShipped(selectedOrder);
    setSelectedOrder(null);
  };

  return (
    <Page fullWidth>
      <PageHeading title="Orders" brand="Outer Limits Studios" />
      <Layout>
        <Layout.Section oneThird>
          <CardWrapper title="Needs Shipping">
            {unshippedOrders ? (
              <UnshippedOrders
                unshippedOrders={unshippedOrders}
                selectForShipping={selectForShipping}
              />
            ) : (
              <Loading />
            )}
          </CardWrapper>
        </Layout.Section>
        <Layout.Section oneThird>
          <CardWrapper title="Selected">
            <SelectedOrder selectedOrderData={selectedOrder} completeShipping={completeShipping} />
          </CardWrapper>
        </Layout.Section>
        <Layout.Section oneThird>
          <CardWrapper title="Shipped">
            {shippedOrders ? <ShippedOrders shippedOrders={shippedOrders} /> : <Loading />}
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
