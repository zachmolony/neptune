const baseUrl = "https://localhost:4242";
// const baseUrl = 'https://api.neptune.com';

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
  getFees: "/developers/fees",
  getClientData: "/developers/getAllClients",
  getMessages: "/developers/getAllMessages",
};
