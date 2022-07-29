import { Page, Layout } from "@shopify/polaris";
import React from "react";
import CardWrapper from "../../components/CardWrapper";
import Divider from "../../components/Divider";
import RecentOrders from "../../components/RecentOrders";
import Drops from "../../components/Drops.js";
import MySiteContent from "../../components/MySiteContent.js";

import Loading from "../../components/atoms/Loading";

import SalesGraph from "../../assets/salesGraph.png";
import { useProducts } from "../../context/products";
import { useOrders } from "../../context/orders";

const DashboardContent = () => {
  const { products } = useProducts();
  const { orders } = useOrders();

  console.log("products", products);

  return (
    <Page fullWidth>
      <div className="py-4">
        <h1 className="w-full pb-4 text-3xl font-bold">Outer Limits' Webstore</h1>
        <Divider />
      </div>
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
