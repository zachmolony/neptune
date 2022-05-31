const Stripe = require("stripe");
const stripe = Stripe("sk_test_7HobkYqAO6exIj2b4PO25KUN");

const resource = stripe.StripeResource.extend({
  request: stripe.StripeResource.method({
    method: "POST",
    path: "inventories"
  })
});

new resource(stripe).request(
  {
    orderable: 100,
    in_stock: 100
  },
  function (err, response) {
    // asynchronously called
  }
);
