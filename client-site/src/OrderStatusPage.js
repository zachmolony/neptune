import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe } from "@stripe/react-stripe-js";

import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_9xvq93nGHz35YvMaJQBkr2R3", {
  betas: ["process_order_beta_1"],
  apiVersion: "2018-08-23; orders_beta=v4"
});

export default function OrderStatusPage() {
  return (
    <Elements stripe={stripePromise}>
      <OrderStatus />
    </Elements>
  );
}

function OrderStatus() {
  const stripe = useStripe();
  const [message, setMessage] = useState(null);
  useEffect(() => {
    (async () => {
      if (!stripe) {
        return;
      }

      const clientSecret = new URLSearchParams(window.location.search).get(
        "order_client_secret"
      );

      stripe.retrieveOrder(clientSecret).then(({ order }) => {
        switch (order.payment.payment_intent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      });
    })();
  }, [stripe]);

  return (
    <>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </>
  );
}
