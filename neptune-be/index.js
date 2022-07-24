const express = require("express");
var cors = require("cors");
const app = express();
// This is your test secret API key.
const stripe = require("stripe")("sk_test_7HobkYqAO6exIj2b4PO25KUN", {
  apiVersion: "2018-08-23; orders_beta=v4"
});

const port = 4242;

app.use(cors());

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.get("/", (req, res) => {
  res.send("hello mate");
});

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "gbp",
    automatic_payment_methods: {
      enabled: true
    }
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

app.get("/products", async (req, res) => {
  const products = await stripe.products.list({
    limit: 3
  });

  res.send(products.data);
});

app.get("/orders", async (req, res) => {
  const orders = await stripe.orders.list({
    limit: 3
  });

  res.send(orders.data);
});

app.listen(port, () => console.log(`"Node server listening on port ${port}!"`));
