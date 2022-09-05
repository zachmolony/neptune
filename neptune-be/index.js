const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// This is your test secret API key.
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51LQCiYJUYwAUydjjk4Trzq481c5ZEbXTZdhSpHxm48ngZf1yy0MbbShIFrGwW7l0xqsidySBVlC2hng42AFWTgQl00ZtCftApQ",
  { apiVersion: "2020-08-27; orders_beta=v4;" }
);

// const { fetchOrders } = require("./storeowner.js");

const developerId = "acct_18vqfsKjjG8w6pC3";

const app = express();
const port = 4242;

app.use(express.static("public"));
app.use(cors());

const calculateDeveloperFee = (lineItems) => {
  const total = lineItems.reduce((acc, item) => {
    return acc + item.price_data.unit_amount * item.quantity;
  }, 500);
  return Math.round(total * 0.05);
};

const getProducts = async () => {
  const products = await stripe.products.list(
    {
      limit: 20,
      active: true,
    },
    {
      stripeAccount: developerId,
    }
  );
  return products.data;
};

const fetchPrice = async (priceId) => {
  return await stripe.prices.retrieve(priceId, {
    stripeAccount: developerId,
  });
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
  const products = await getProducts().then((products) => populateProductsPriceData(products));

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
        name: product.name,
      },
      price_data: {
        unit_amount: product.price.unit_amount,
      },
      quantity: item.quantity,
    };
  });
};

app.post("/create-order", bodyParser.json(), async (req, res) => {
  const { items } = req.body;

  let lineItems;
  try {
    lineItems = await generateLineItems(items);
  } catch (e) {
    console.log("Error generating line items:", e);
    return res.status(400).send({ error: e.message });
  }

  const developerFee = calculateDeveloperFee(lineItems);

  const order = await stripe.orders.create(
    {
      currency: "gbp",
      line_items: lineItems,
      shipping_cost: { shipping_rate: "shr_1KksGwKjjG8w6pC39WekF6sQ" },
      shipping_details: {
        name: "Zach Molony",
        address: {
          line1: "Flat 3, 224 Tooting High Street, Tooting",
          postal_code: "SW17 0SG",
          city: "London",
          country: "GB",
        },
      },
      billing_details: {
        name: "Zach Molony",
        address: {
          line1: "Flat 3, 224 Tooting High Street, Tooting",
          postal_code: "SW17 0SG",
          city: "London",
          country: "GB",
        },
        email: "zach.molony@gmail.com",
      },
      metadata: {
        developer_fee: developerFee,
        shipping_status: "unshipped",
      },
      payment: {
        settings: {
          payment_method_types: ["card"],
          application_fee_amount: developerFee,
        },
      },
    },
    {
      stripeAccount: developerId,
    }
  );

  res.send({
    clientSecret: order.client_secret,
  });
});

app.get("/products", async (req, res) => {
  const products = await getProducts();

  const productData = await populateProductsPriceData(products);

  res.send(productData);
});

// Orders

const getOrderLineItems = async (orderId) => {
  console.log(`orders/${orderId}/line_items`, orderId);
  const resource = Stripe.StripeResource.extend({
    request: Stripe.StripeResource.method({
      method: "GET",
      path: `orders/${orderId}/line_items`,
    }),
  });

  const lineItems = new resource(stripe).request(
    {
      limit: 3,
    },
    { stripeAccount: developerId }
  );

  console.log("Lineitems:", await lineItems);
  return await lineItems;
};

const populateOrderLineItems = async (completedOrders) => {
  return await Promise.all(
    completedOrders.map(async (order) => {
      const lineItems = await getOrderLineItems(order.id);
      order.line_items = lineItems.data;
      return order;
    })
  );
};

app.get("/orders", async (req, res) => {
  const orders = await stripe.orders.list(
    {
      limit: 20,
    },
    { stripeAccount: developerId }
  );

  const populatedOrders = await populateOrderLineItems(
    orders.data.filter((order) => order.status === "complete")
  );

  console.log("Completed orders:", populatedOrders);
  res.send(populatedOrders);
});

// get order items

app.get("/order", async (req, res) => {
  const resource = Stripe.StripeResource.extend({
    request: Stripe.StripeResource.method({
      method: "GET",
      path: "orders/order_1LS2MCKjjG8w6pC3NpRoZhWv/line_items",
    }),
  });

  const ress = new resource(stripe).request(
    {
      limit: 3,
    },
    { stripeAccount: developerId }
  );

  res.send(await ress);
});

// Fees

app.get("/fees", async (req, res) => {
  const applicationFees = await stripe.applicationFees.list({
    limit: 10,
  });

  res.send(applicationFees.data);
});

app.listen(port, () => console.log(`"Node server listening on port ${port}!"`));
