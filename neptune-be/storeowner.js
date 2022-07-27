const fetchOrders = async (req, res) => {
  const orders = await stripe.orders.list({
    limit: 20
  });

  const completedOrders = orders.data.filter(
    (order) => order.status === "complete"
  );
  res.send(completedOrders);
};

module.exports = {
  fetchOrders
};
