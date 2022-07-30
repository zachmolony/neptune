import React from "react";
import { Page, Layout } from "@shopify/polaris";
import CardWrapper from "../../components/CardWrapper";
import RecentOrders from "../../components/store/RecentOrders";
import Drops from "../../components/store/Drops.js";
import MySiteContent from "../../components/store/MySiteContent.js";
import Loading from "../../components/atoms/Loading";

import SalesGraph from "../../assets/salesGraph.png";
import { useProducts } from "../../context/products";
import { useOrders } from "../../context/orders";
import PageHeading from "../../components/PageHeading";

const DashboardContent = () => {
  const { products } = useProducts();
  const { orders } = useOrders();

  return (
    <Page fullWidth>
      <PageHeading title="Dashboard" brand="Outer Limits" />
      <Layout>
        <Layout.Section>
          <CardWrapper title="Recent Orders">
            {orders ? <RecentOrders orders={orders} /> : <Loading />}
          </CardWrapper>
        </Layout.Section>

        <Layout.Section secondary>
          <CardWrapper title="My Store">
            <MySiteContent />
          </CardWrapper>
          <CardWrapper
            title="Upcoming Drop"
            innerTitle="This Friday"
            actions={[{ content: "Manage" }]}
          >
            {products ? <Drops products={products} /> : <Loading />}
          </CardWrapper>
          <CardWrapper title="Sales">
            <div className="p-3">
              <img src={SalesGraph} alt="" />
            </div>
          </CardWrapper>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default DashboardContent;
