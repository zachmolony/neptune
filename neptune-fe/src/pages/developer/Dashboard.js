import { Page, Layout, Card } from "@shopify/polaris";
import React from "react";
import CardWrapper from "../../components/CardWrapper";
import Divider from "../../components/Divider";

import SalesGraph from "../../assets/salesGraph.png";
import { useDeveloper } from "../../context/developer.js";
import ClientList from "../../components/ClientList.js";

const DashboardContent = () => {
  const { fees, clients } = useDeveloper();
  return (
    <Page fullWidth>
      <div className="py-4">
        <h1 className="w-full pb-4 text-3xl font-bold">Dashboard</h1>
        <Divider />
      </div>
      <Layout>
        <Layout.Section>
          <CardWrapper title="Clients" buttonTitle={"Add Client"}>
            {clients ? <ClientList clients={clients} /> : <></>}
          </CardWrapper>
        </Layout.Section>

        <Layout.Section secondary>
          <CardWrapper title="Collected Fees" innerTitle="Total Fees">
            <Card.Section>
              {<h3 className="text-2xl text-primary">£{fees / 100}.00</h3>}
            </Card.Section>
          </CardWrapper>
          <CardWrapper title="Client Messages">
            <div className="p-3"></div>
          </CardWrapper>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default DashboardContent;
