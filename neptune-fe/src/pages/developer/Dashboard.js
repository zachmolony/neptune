import { Page, Layout, Card } from "@shopify/polaris";
import React from "react";
import CardWrapper from "../../components/CardWrapper";
import PageHeading from "../../components/PageHeading";

import { useDeveloper } from "../../context/developer.js";
import ClientList from "../../components/developer/ClientList.js";
import Loading from "../../components/atoms/Loading";
import Fees from "../../components/developer/Fees";
import ClientMessages from "../../components/developer/ClientMessages.js";

const DashboardContent = () => {
  const { fees, clients, messages } = useDeveloper();
  return (
    <Page fullWidth>
      <PageHeading title="Dashboard" brand="Outer Limits" />
      <Layout>
        <Layout.Section>
          <CardWrapper title="Clients" buttonTitle={"Add Client"}>
            {clients ? <ClientList clients={clients} /> : <></>}
          </CardWrapper>
        </Layout.Section>

        <Layout.Section secondary>
          <CardWrapper title="Collected Fees" innerTitle="Total Fees">
            <Card.Section>{fees ? <Fees fees={fees} /> : <Loading />}</Card.Section>
          </CardWrapper>
          <CardWrapper title="Client Messages">
            {messages ? <ClientMessages messages={messages} /> : <Loading />}
          </CardWrapper>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default DashboardContent;
