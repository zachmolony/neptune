export const formatCurrency = (value) => {
  return (value / 100).toLocaleString("en-GB", { style: "currency", currency: "GBP" });
};
