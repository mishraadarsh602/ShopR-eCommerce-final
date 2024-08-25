import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "../../Stripe.css";
import { selectCurrentOrder } from "../order/orderSlice";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51NlsUgSIk7JPtwlJn2du6zfscA5we54w3UzftDmqkL8mtUNSjSyjTcm6TMjsF0W3Lm9WLhwzimUoxaakFFevl8T900jPXglL5S");

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");
const currentOrder = useSelector(selectCurrentOrder);
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalAmount: currentOrder.totalAmount  }),
      meta:{
        order_id:currentOrder.id
        //this info will go to stripe => and then to our webhook
        //so we can conclude that the payment was successful, even if client closes the window after payment
      }
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="mx-auto max-w-xl mt-10 px-4 sm:px-6 lg:px-8">

      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}