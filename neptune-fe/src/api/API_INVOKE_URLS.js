const baseUrl = "https://localhost:4242";

const DEVELOPER_BASE_URL = "https://4xmiurcz4i.execute-api.eu-west-2.amazonaws.com/default";

export const OrdersAPI = {
  getOrders: `${baseUrl}/orders`,
  markOrderAsShipped: `${baseUrl}/orders/mark_order_as_shipped`,
};

export const ProductsAPI = {
  getProducts: "/products",
  getProductById: "/products/:id",
  createProduct: "/products",
  updateProduct: "/products/:id",
  deleteProduct: "/products/:id",
};

export const DevelopersAPI = {
  getFees: "http://localhost:4242/fees",
  getClientData: `${DEVELOPER_BASE_URL}/getAllClients`,
  getMessages: "/developers/getAllMessages",
};
