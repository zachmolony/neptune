import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const OrdersContext = createContext({});

const useOrders = () => {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const formatOrderSummary = (data) =>
      data.map((order) => {
        const {
          id,
          created,
          amount_total,
          currency,
          status,
          billing_details,
          shipping_details,
          items
        } = order;

        const { name, address } = billing_details || {
          name: "Zach Molony",
          address: {
            city: "London",
            postal_code: "SW1"
          }
        };

        return {
          id,
          name,
          amount_spent: `${amount_total / 100} ${(
            currency || "usd"
          ).toUpperCase()}`,
          address: `${address.city}, ${address.postal_code}`,
          items: [{ a: 1 }, { b: 2 }].length
        };
      });

    const getOrders = () => {
      axios({
        method: "get",
        url: "http://localhost:4242/orders"
      }).then(function (response) {
        setOrders(formatOrderSummary(response.data));
      });
    };

    getOrders();
  }, []);

  const contextValue = {
    orders
  };
  return (
    <OrdersContext.Provider value={contextValue}>
      {children}
    </OrdersContext.Provider>
  );
};

export { OrdersProvider, useOrders };
