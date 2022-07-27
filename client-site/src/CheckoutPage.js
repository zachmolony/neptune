import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./App.css";
import CartItems from "./CartItems";
import { useCart } from "./context/cart";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_9xvq93nGHz35YvMaJQBkr2R3", {
  betas: ["process_order_beta_1"],
  apiVersion: "2018-08-23; orders_beta=v4"
});

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState("");
  const { state } = useCart();

  useEffect(() => {
    if (state && state.length > 0) {
      console.log(state);
      const items = state.map((item) => ({
        product: item.id,
        quantity: item.quantity
      }));

      console.log(items);

      // Create Order as soon as the page loads
      fetch("http://localhost:4242/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: items })
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, []);

  const appearance = {
    theme: "none",
    variables: {
      fontFamily: "Common Pixel",
      fontLineHeight: "1.5",
      borderRadius: "0"
    },
    rules: {
      ".Input": {
        backgroundColor: "#f3f3f3"
      },
      ".Input--invalid": {
        color: "#DF1B41"
      },
      ".Tab, .Block": {
        boxShadow:
          "inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf"
      },
      ".Tab:hover": {
        backgroundColor: "#eee"
      },
      ".Tab--selected, .Tab--selected:focus, .Tab--selected:hover": {
        backgroundColor: "#ccc"
      }
    }
  };
  const options = {
    clientSecret,
    appearance,
    fonts: [
      {
        cssSrc: "https://fonts.cdnfonts.com/css/common-pixel"
      }
    ]
  };

  return (
    <div className="App">
      {state ? <CartItems state={state} /> : ""}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
