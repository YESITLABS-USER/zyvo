import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "../../components/guest/Checkout";

// import CheckoutForm from "../../components/guest/CheckoutForm";

// Replace with your Stripe Publishable Key
const stripePromise = loadStripe(
  "pk_test_51QnHZl2Nd862ZJtETiUKw9fMnacKnSy3u27rwJzDsDzGoKV7yFcHWW7Zy68KXflyGZqc5Cjm2ChdpWlaE72R0fp200DSuioFyd"
);

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <h2>Checkout</h2>
      <Checkout />
      {/* <CheckoutForm amount={50} /> */}
    </Elements>
  );
};

export default CheckoutPage;
