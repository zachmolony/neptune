import { Button as Btn, Heading, TextStyle } from "@shopify/polaris";
import { formatCurrency } from "../../utils/formatting";
import { useState } from "react";
import Button from "../atoms/Button";

const SelectedOrderLineItem = ({ item }) => {
  const [bagged, setBagged] = useState(false);
  return (
    <div>
      <div className="flex w-full h-18 justify-between my-2">
        <div className="flex">
          <div className="w-1/3 mr-2">
            <img src={item.product.images[0]} alt="" />
          </div>
          <div>
            <Heading>{item.description}</Heading>
            <div>Size • One Size</div>
            <div>Quantity • {item.quantity}</div>
          </div>
        </div>
        <div>
          <TextStyle variation="strong">{formatCurrency(item.amount_subtotal)}</TextStyle>
        </div>
      </div>
      {bagged ? (
        <div className="flex w-full justify-end -mt-8">
          <Btn onClick={() => setBagged(false)}>Bagged</Btn>
        </div>
      ) : (
        <div className="flex w-full justify-end -mt-8">
          <Button primary onClick={() => setBagged(true)}>
            Bag
          </Button>
        </div>
      )}
    </div>
  );
};

export default SelectedOrderLineItem;
