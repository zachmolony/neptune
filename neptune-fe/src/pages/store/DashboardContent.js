import {
  Page,
  Layout,
  Card,
  TextStyle,
  ResourceList,
  Thumbnail
} from "@shopify/polaris";
import React from "react";
import CardWrapper from "../../components/CardWrapper";
import Divider from "../../components/Divider";
import RecentOrders from "../../components/RecentOrders";
import MySiteContent from "../../components/MySiteContent.js";

import SalesGraph from "../../assets/salesGraph.png";

const DashboardContent = () => {
  return (
    <Page fullWidth>
      <div className="py-4">
        <h1 className="w-full pb-4 text-3xl font-bold">
          Outer Limits' Webstore
        </h1>
        <Divider />
      </div>
      <Layout>
        <Layout.Section>
          <CardWrapper title="Recent Orders">
            <RecentOrders />
          </CardWrapper>
        </Layout.Section>

        <Layout.Section secondary>
          <CardWrapper title="My Store">
            <MySiteContent />
          </CardWrapper>
          <CardWrapper title="Sales">
            <div className="p-3">
              <img src={SalesGraph} alt="" />
            </div>
          </CardWrapper>
          <CardWrapper
            title="Upcoming Drops"
            innerTitle="This Friday"
            actions={[{ content: "Manage" }]}
          >
            <Card.Section title="Items">
              <ResourceList
                resourceName={{ singular: "product", plural: "products" }}
                items={[
                  {
                    id: 342,
                    url: "produdcts/342",
                    name: "Black & orange scarf",
                    sku: "9234194023",
                    quantity: "100",
                    media: (
                      <Thumbnail
                        source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                        alt="Black orange scarf"
                      />
                    )
                  },
                  {
                    id: 257,
                    url: "produdcts/257",
                    name: "Tucan scarf",
                    sku: "9234194010",
                    quantity: "201",
                    media: (
                      <Thumbnail
                        source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                        alt="Tucan scarf"
                      />
                    )
                  }
                ]}
                renderItem={(item) => {
                  const { id, url, name, sku, media, quantity } = item;

                  return (
                    <ResourceList.Item
                      id={id}
                      url={url}
                      media={media}
                      accessibilityLabel={`View details for ${name}`}
                    >
                      <h3>
                        <TextStyle variation="strong">{name}</TextStyle>
                      </h3>
                      <div>SKU: {sku}</div>
                      <div>{quantity} available</div>
                    </ResourceList.Item>
                  );
                }}
              />
            </Card.Section>
          </CardWrapper>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default DashboardContent;
