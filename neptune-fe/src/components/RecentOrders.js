import React from "react";
import PropTypes from "prop-types";
import { IndexTable, TextStyle, useIndexResourceState } from "@shopify/polaris";

const RecentOrders = ({ orders }) => {
  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders);

  const rowMarkup = orders.map(({ id, name, address, items, amount_spent }, index) => (
    <IndexTable.Row id={id} key={id} selected={selectedResources.includes(id)} position={index}>
      <IndexTable.Cell>
        <TextStyle variation="strong">{name}</TextStyle>
      </IndexTable.Cell>
      <IndexTable.Cell>{address}</IndexTable.Cell>
      <IndexTable.Cell>{items}</IndexTable.Cell>
      <IndexTable.Cell>{amount_spent}</IndexTable.Cell>
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
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      address: PropTypes.string,
      items: PropTypes.string.isRequired,
      amount_spent: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RecentOrders;
