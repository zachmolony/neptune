const baseUrl = "https://localhost:4242";

const DEVELOPER_BASE_URL = "https://4xmiurcz4i.execute-api.eu-west-2.amazonaws.com/default";

const NEPTUNE_CORE_BASE_API = "https://3i3ax850tc.execute-api.eu-west-2.amazonaws.com/dev";

export const OrdersAPI = {
  getOrders: `${NEPTUNE_CORE_BASE_API}/orders`,
  markOrderAsShipped: `${NEPTUNE_CORE_BASE_API}/orders/mark_order_as_shipped`,
};

export const ProductsAPI = {
  getProducts: `${NEPTUNE_CORE_BASE_API}/products`,
  getProductById: "/products/:id",
  createProduct: "/products",
  updateProduct: "/products/:id",
  deleteProduct: "/products/:id",
};

export const DevelopersAPI = {
  getFees: `${NEPTUNE_CORE_BASE_API}/fees`,
  getClientData: `${DEVELOPER_BASE_URL}/getAllClients`,
  getMessages: "/developers/getAllMessages",
};
