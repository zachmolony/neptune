const DEVELOPMENT_URL = "http://localhost:4242";

const DEVELOPER_BASE_URL = "https://4xmiurcz4i.execute-api.eu-west-2.amazonaws.com/default";

const NEPTUNE_CORE_BASE_API = "https://3i3ax850tc.execute-api.eu-west-2.amazonaws.com/dev";

const CORE_BASE_URL =
  process.env.NODE_ENV === "development" ? DEVELOPMENT_URL : NEPTUNE_CORE_BASE_API;

export const OrdersAPI = {
  getOrders: `${CORE_BASE_URL}/orders`,
  markOrderAsShipped: `${CORE_BASE_URL}/orders/mark_as_shipped`,
};

export const ProductsAPI = {
  getProducts: `${CORE_BASE_URL}/products`,
  getProductById: "/products/:id",
  createProduct: "/products",
  updateProduct: "/products/:id",
  deleteProduct: "/products/:id",
};

export const DevelopersAPI = {
  getFees: `${CORE_BASE_URL}/fees`,
  getClientData: `${DEVELOPER_BASE_URL}/getAllClients`,
  getMessages: "/developers/getAllMessages",
};
