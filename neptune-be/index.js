const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// This is your test secret API key.
const stripe = require("stripe")("sk_test_7HobkYqAO6exIj2b4PO25KUN", {
  apiVersion: "2018-08-23; orders_beta=v4"
});

const app = express();
const port = 4242;

app.use(express.static("public"));
app.use(cors());

// Define/retrieve product details on backend server.
const products = {
  trinket_club_hat: {
    name: "Trinket Club Hat",
    unit_amount: 1000,
    currency: "usd"
  }
};

// Generate line items using existing product information.
const generateLineItems = (items) => {
  return items.map((item) => {
    // Add any logic needed to validate product IDs and
    // quantities here. For example: inventory checks.
    const product = products[item.product];
    if (!product) {
      throw "Invalid product";
    }
    return {
      product_data: {
        id: item.product,
        name: product.name
      },
      price_data: {
        unit_amount: product.unit_amount
      },
      quantity: item.quantity
    };
  });
};

app.post("/create-order", bodyParser.json(), async (req, res) => {
  const { items } = req.body;

  try {
    lineItems = generateLineItems(items);
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }

  const order = await stripe.orders.create({
    currency: "usd",
    line_items: lineItems
  });

  res.send({
    clientSecret: order.client_secret
  });
});

app.get("/", (req, res) => {
  res.send("hello mate");
});

app.get("/orders", async (req, res) => {
  const orders = await stripe.orders.list({
    limit: 3
  });

  res.send(orders.data);
});

app.get("/products", async (req, res) => {
  const products = await stripe.products.list({
    limit: 3
  });

  res.send(products.data);
});

app.listen(port, () => console.log(`"Node server listening on port ${port}!"`));
