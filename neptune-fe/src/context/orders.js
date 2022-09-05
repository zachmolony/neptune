import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const OrdersContext = createContext({});

const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const getOrders = () => {
      axios({
        method: "get",
        url: "http://localhost:4242/orders",
      }).then(function (response) {
        setOrders(response.data);
      });
    };

    getOrders();
  }, []);

  const markOrderAsShipped = ({ id }) => {
    orders.map((item) => (item.id === id ? (item.metadata.shipping_status = "shipped") : item));
    axios({
      method: "post",
      url: "http://localhost:4242/orders/mark_as_shipped",
      query: id,
    }).then(function (response) {
      // setOrders(response.data);
    });
  };

  const getOrderById = (orderId) => {
    return orders.find((order) => order.id === orderId);
  };

  const contextValue = {
    markOrderAsShipped,
    getOrderById,
    orders,
  };
  return <OrdersContext.Provider value={contextValue}>{children}</OrdersContext.Provider>;
};

const useOrders = () => {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

export { OrdersProvider, useOrders };
