const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// This is your test secret API key.
const stripe = require("stripe")("sk_test_7HobkYqAO6exIj2b4PO25KUN", {
  apiVersion: "2018-08-23; orders_beta=v4"
});
const { fetchOrders } = require("./storeowner.js");

const app = express();
const port = 4242;

app.use(express.static("public"));
app.use(cors());

const getProducts = async () => {
  const products = await stripe.products.list({
    limit: 20,
    active: true
  });
  return products.data;
};

const fetchPrice = async (priceId) => {
  return await stripe.prices.retrieve(priceId);
};

const populateProductsPriceData = async (lineItems) => {
  return await Promise.all(
    lineItems.map(async (product) => {
      const price = await fetchPrice(product.default_price);
      product.price = price;
      return product;
    })
  );
};

// Generate line items using existing product information.
const generateLineItems = async (items) => {
  const products = await getProducts().then((products) =>
    populateProductsPriceData(products)
  );
  console.log("products", products);
  console.log("items", items);

  return items.map((item) => {
    // Add any logic needed to validate product IDs and
    // quantities here. For example: inventory checks.
    const product = products.find((product) => product.id === item.product);
    if (!product) {
      console.log("Product not found:", item.product);
      throw "Invalid product";
    }
    return {
      product_data: {
        id: item.product,
        name: product.name
      },
      price_data: {
        unit_amount: product.price.unit_amount
      },
      quantity: item.quantity
    };
  });
};

app.post("/create-order", bodyParser.json(), async (req, res) => {
  const { items } = req.body;

  let lineItems;
  try {
    lineItems = await generateLineItems(items);
    console.log("lineItems", lineItems);
  } catch (e) {
    console.log("Error generating line items:", e);
    return res.status(400).send({ error: e.message });
  }

  const order = await stripe.orders.create({
    currency: "gbp",
    line_items: lineItems
  });

  res.send({
    clientSecret: order.client_secret
  });
});

app.get("/products", async (req, res) => {
  const products = await getProducts();

  const productData = await populateProductsPriceData(products);

  res.send(productData);
});

// Orders

app.get("/orders", fetchOrders);

app.listen(port, () => console.log(`"Node server listening on port ${port}!"`));
