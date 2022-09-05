import React from "react";
import PropTypes from "prop-types";
import { IndexTable, TextStyle, useIndexResourceState } from "@shopify/polaris";
import { formatCurrency } from "../../utils/formatting";

const RecentOrders = ({ orders }) => {
  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders);

  const rowMarkup = orders.map(({ id, shipping_details, line_items, amount_total }, index) => (
    <IndexTable.Row id={id} key={id} selected={selectedResources.includes(id)} position={index}>
      <IndexTable.Cell>
        <TextStyle variation="strong">{shipping_details.name}</TextStyle>
      </IndexTable.Cell>
      <IndexTable.Cell>{shipping_details.address.line1}</IndexTable.Cell>
      <IndexTable.Cell>{line_items.length}</IndexTable.Cell>
      <IndexTable.Cell>{formatCurrency(amount_total)}</IndexTable.Cell>
    </IndexTable.Row>
  ));

  return (
    <IndexTable
      resourceName={resourceName}
      itemCount={orders.length}
      selectedItemsCount={allResourcesSelected ? "All" : selectedResources.length}
      onSelectionChange={handleSelectionChange}
      headings={[
        { title: "Name" },
        { title: "Location" },
        { title: "Items" },
        { title: "Amount spent" },
      ]}
    >
      {rowMarkup}
    </IndexTable>
  );
};

RecentOrders.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default RecentOrders;
