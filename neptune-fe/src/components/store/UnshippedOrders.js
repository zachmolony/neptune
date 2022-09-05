import PropTypes from "prop-types";
import dayjs from "dayjs";
import { ResourceList, ResourceItem, TextStyle, Icon, Badge } from "@shopify/polaris";
import { NoteMinor, ConversationMinor } from "@shopify/polaris-icons";
import { useState } from "react";
import { formatCurrency } from "../../utils/formatting";
import isEmpty from "lodash/isEmpty";

const UnshippedOrders = ({ unshippedOrders, selectForShipping }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  const promotedBulkActions = [
    {
      content: "Ship Order",
      onAction: () => {
        setSelectedItems(selectedItems);
        selectForShipping(selectedItems);
      },
    },
  ];

  return (
    <>
      {!isEmpty(unshippedOrders) ? (
        <ResourceList
          resourceName={resourceName}
          items={unshippedOrders}
          renderItem={renderItem}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          promotedBulkActions={promotedBulkActions}
          resolveItemId={resolveItemIds}
        />
      ) : (
        <div className="flex flex-col text-center p-8">
          <h3 className="text-lg">No orders to ship</h3>
        </div>
      )}
    </>
  );

  function renderItem(item, _, index) {
    const { id, shipping_details, line_items, created, amount_total } = item;
    const newId = id.slice(-6);

    return (
      <ResourceItem
        id={id}
        sortOrder={index}
        accessibilityLabel={`View details for ${shipping_details.name}`}
      >
        <div>
          <div>
            #{newId} • {dayjs.unix(created).format("HH:mm MMM DD YYYY")}
          </div>
          <div className="w-full flex justify-between">
            <h3>
              <TextStyle variation="strong">{shipping_details.name}</TextStyle>
            </h3>
            <div>
              <h3>
                <TextStyle variation="strong">{formatCurrency(amount_total)}</TextStyle>
              </h3>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div>
              <Badge status="new" progress="complete">
                Paid
              </Badge>
              <Badge status="warning" progress="none">
                Unfilfulled
              </Badge>
            </div>
            <div className="flex">
              <Icon source={NoteMinor} color="subdued" />
              <Icon source={ConversationMinor} color="subdued" />
            </div>
          </div>
          <div>
            <div>{line_items.length} Items • UK Shipping</div>
          </div>
        </div>
      </ResourceItem>
    );
  }

  function resolveItemIds({ id }) {
    return id;
  }
};

UnshippedOrders.propTypes = {
  unshippedOrders: PropTypes.array.isRequired,
};

export default UnshippedOrders;
