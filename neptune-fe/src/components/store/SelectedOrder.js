import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import EmptyBox from "../../assets/empty-box-icon.png";
import { Button, TextStyle, Icon, Badge, Heading } from "@shopify/polaris";
import { NoteMinor, ConversationMinor } from "@shopify/polaris-icons";
import { formatCurrency } from "../../utils/formatting";
import dayjs from "dayjs";
import SelectedOrderLineItem from "./SelectedOrderLineItem";

const SelectedOrder = ({ selectedOrderData, completeShipping }) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    setValue(selectedOrderData);
  }, [selectedOrderData]);

  const markAsShipped = () => {
    completeShipping(value);
  };

  const { id, shipping_details, line_items, created, amount_total } = value || {};
  const newId = id?.slice(-6);

  return (
    <div className="p-4">
      {value ? (
        <>
          <div className="pb-4">
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
          </div>

          <div className="pb-4">
            <Heading>Shipping Info</Heading>

            <div className="">
              <h3>
                <p>{shipping_details.name}</p>
              </h3>
              <h3>
                <p>{shipping_details.address.line1}</p>
              </h3>
              <h3>
                <p>{shipping_details.address.city}</p>
              </h3>
              <h3>
                <p>{shipping_details.address.postal_code}</p>
              </h3>
            </div>
          </div>
          <div className="pb-4">
            <Heading>Items</Heading>
            <div className="flex flex-col">
              {value.line_items.map((item) => (
                <SelectedOrderLineItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="sticky h-12 w-full">
            <div className="flex w-full justify-between">
              <div style={{ color: "#bf0711" }}>
                <Button monochrome outline>
                  Cancel Order
                </Button>
              </div>
              <div>
                <Button onClick={() => markAsShipped(value.id)}>Mark as Fulfilled</Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col text-center p-8">
          <img src={EmptyBox} alt="" className="w-1/2 mx-auto" />
          <h3 className="text-lg">No order selected</h3>
          <p>Select an order from the left column to start shipping.</p>
        </div>
      )}
    </div>
  );
};

SelectedOrder.propTypes = {
  selectedOrder: PropTypes.object,
};

SelectedOrder.defaultProps = {
  selectedOrder: null,
};

export default SelectedOrder;
