import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useCart } from "./context/cart";
import CheckoutForm from "./CheckoutForm";
import CartItems from "./CartItems";
import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51LQCiYJUYwAUydjjCeZhuWZAN9qCLy9QhZQpXN7J1AJnrQNt5z13yxBQXFaMk9gr4inx5AytSnqnQLAENuLcbbx800ZJ9quFs9",
  {
    betas: ["process_order_beta_1"],
    apiVersion: "2020-08-27; orders_beta=v4",
    stripeAccount: "acct_18vqfsKjjG8w6pC3",
  }
);

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState("");
  const { state } = useCart();

  useEffect(() => {
    if (state && state.length > 0) {
      console.log(state);
      const items = state?.map((item) => ({
        product: item.id,
        quantity: item.quantity,
      }));

      // Create Order as soon as the page loads
      fetch("http://localhost:4242/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: items }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, []);

  const appearance = {
    theme: "none",
    variables: {
      fontFamily: "Common Pixel",
      borderRadius: "0",
    },
    rules: {
      ".Input": {
        backgroundColor: "#f3f3f3",
      },
      ".Input--invalid": {
        color: "#DF1B41",
      },
      ".Tab:hover": {
        backgroundColor: "#eee",
      },
      ".Tab--selected, .Tab--selected:focus, .Tab--selected:hover": {
        backgroundColor: "#ccc",
      },
    },
  };
  const options = {
    clientSecret,
    appearance,
    fonts: [
      {
        cssSrc: "https://fonts.cdnfonts.com/css/common-pixel",
      },
    ],
  };

  return (
    <div className="mx-auto">
      {state ? (
        <form className="nes-container with-title is-centered mx-auto mt-8">
          <p className="title">Items</p>
          <CartItems state={state} />
        </form>
      ) : (
        ""
      )}
      <form className="nes-container with-title is-centered mx-auto mt-8">
        <h1 className="title">Shipping Details</h1>
        <p>
          <label htmlFor="name" className="float-left mb-0 mt-2">
            Name
          </label>
          <input type="text" id="name" className="w-full h-8" />
        </p>
        <p>
          <label htmlFor="email" className="float-left mb-0 mt-2">
            Email
          </label>
          <input type="email" id="email" className="w-full h-8" />
        </p>
        <p>
          <label htmlFor="address" className="float-left mb-0 mt-2">
            Address
          </label>
          <input type="text" id="address" className="w-full h-8" />
        </p>
        <p>
          <label htmlFor="city" className="float-left mb-0 mt-2">
            City
          </label>
          <input type="text" id="city" className="w-full h-8" />
        </p>
        <p>
          <label htmlFor="postcode" className="float-left mb-0 mt-2">
            Postcode
          </label>
          <input type="text" id="postcode" className="w-full h-8" />
        </p>
      </form>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
