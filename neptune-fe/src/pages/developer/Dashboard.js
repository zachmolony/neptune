import React from "react";
import { Page, Layout, Card } from "@shopify/polaris";

import CardWrapper from "../../components/CardWrapper";
import PageHeading from "../../components/PageHeading";
import ClientList from "../../components/developer/ClientList.js";
import Loading from "../../components/atoms/Loading";
import Fees from "../../components/developer/Fees";
import ClientMessages from "../../components/developer/ClientMessages.js";

import { useDeveloper } from "../../context/developer.js";

const DashboardContent = () => {
  const { fees, recentFee, clients, messages } = useDeveloper();

  return (
    <Page fullWidth>
      <PageHeading title="Dashboard" brand="Zach Molony" />
      <Layout>
        <Layout.Section>
          <CardWrapper title="Clients" buttonTitle={"Add Client"}>
            <div className="py-4 pr-4 pl-2">
              {clients ? <ClientList clients={clients} /> : <Loading />}
            </div>
          </CardWrapper>
        </Layout.Section>

        <Layout.Section secondary>
          <CardWrapper title="Fees" innerTitle="Collected Fees">
            <Card.Section>
              {fees ? <Fees fees={fees} recentFee={recentFee} /> : <Loading />}
            </Card.Section>
          </CardWrapper>
          <CardWrapper title="Messages">
            {messages ? <ClientMessages messages={messages} /> : <Loading />}
          </CardWrapper>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default DashboardContent;
