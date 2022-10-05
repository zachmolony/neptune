import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { OrdersAPI } from "../api/API_INVOKE_URLS";

const OrdersContext = createContext({});

const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const getOrders = () => {
      axios({
        method: "get",
        url: OrdersAPI.getOrders,
      }).then(function (response) {
        setOrders(response.data);
      });
    };

    getOrders();
  }, []);

  const markOrderAsShipped = ({ id }) => {
    orders.map((item) => (item.id === id ? (item.metadata.shipping_status = "shipped") : item));
    // axios({
    //   method: "post",
    //   url: OrdersAPI.markOrderAsShipped,
    //   query: id,
    // }).then(function (response) {
    //   setOrders(response.data);
    // });
  };

  const getOrderById = (orderId) => {
    return orders.find((order) => order.id === orderId);
  };

  const unshippedOrders = orders?.filter(
    (order) => order.metadata?.shipping_status === "unshipped"
  );
  const shippedOrders = orders?.filter((order) => order.metadata?.shipping_status === "shipped");

  const contextValue = {
    orders,
    unshippedOrders,
    shippedOrders,
    getOrderById,
    markOrderAsShipped,
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
