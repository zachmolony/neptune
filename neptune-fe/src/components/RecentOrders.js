import React from "react";
import { IndexTable, TextStyle, useIndexResourceState } from "@shopify/polaris";
import { useOrders } from "../context/orders";

const RecentOrders = () => {
  const { orders } = useOrders();
  console.log("orders", orders);

  const customers = [
    {
      id: "3411",
      url: "/store/orders",
      name: "Mae Jemison",
      location: "Decatur, USA",
      orders: 20,
      amountSpent: "$2,400"
    },
    {
      id: "2561",
      url: "/store/orders",
      name: "Ellen Ochoa",
      location: "Los Angeles, USA",
      orders: 30,
      amountSpent: "$140"
    }
  ];
  const resourceName = {
    singular: "order",
    plural: "orders"
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders);

  const rowMarkup = orders.map(
    ({ id, name, address, items, amount_spent }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <TextStyle variation="strong">{name}</TextStyle>
        </IndexTable.Cell>
        <IndexTable.Cell>{address}</IndexTable.Cell>
        <IndexTable.Cell>{items}</IndexTable.Cell>
        <IndexTable.Cell>{amount_spent}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <IndexTable
      resourceName={resourceName}
      itemCount={customers.length}
      selectedItemsCount={
        allResourcesSelected ? "All" : selectedResources.length
      }
      onSelectionChange={handleSelectionChange}
      headings={[
        { title: "Name" },
        { title: "Location" },
        { title: "Items" },
        { title: "Amount spent" }
      ]}
    >
      {rowMarkup}
    </IndexTable>
  );
};

export default RecentOrders;
