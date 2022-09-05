import PropTypes from "prop-types";
import dayjs from "dayjs";
import { ResourceList, ResourceItem, TextStyle, Icon, Badge } from "@shopify/polaris";
import { NoteMinor, ConversationMinor } from "@shopify/polaris-icons";
import { useState } from "react";
import { formatCurrency } from "../../utils/formatting";
import EmptyBox from "../../assets/empty-box-icon.png";
import isEmpty from "lodash/isEmpty";

const ShippedOrders = ({ shippedOrders }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  const promotedBulkActions = [
    {
      content: "Edit orders",
      onAction: () => console.log("Todo: implement bulk edit"),
    },
  ];

  return (
    <>
      {isEmpty(shippedOrders) ? (
        <div className="flex flex-col text-center p-8">
          <img src={EmptyBox} alt="" className="w-1/2 mx-auto" />
          <h3 className="text-lg">No fulfilled orders</h3>
          <p>Select an order from the left column to start shipping.</p>
        </div>
      ) : (
        <ResourceList
          resourceName={resourceName}
          items={shippedOrders}
          renderItem={renderItem}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          promotedBulkActions={promotedBulkActions}
          resolveItemId={resolveItemIds}
        />
      )}
    </>
  );

  function renderItem(item, _, index) {
    const { id, shipping_details, line_items, created, amount_total } = item;
    const newId = id.slice(-6);

    const handleSelection = (id) => {
      setSelectedItems(item);
    };

    return (
      <ResourceItem
        id={id}
        onClick={() => handleSelection(id)}
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
              <Badge status="success" progress="complete">
                Fulfilled
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

ShippedOrders.propTypes = {
  shippedOrders: PropTypes.array,
};

export default ShippedOrders;
