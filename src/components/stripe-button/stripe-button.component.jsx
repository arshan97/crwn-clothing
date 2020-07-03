import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const publishableKey =
    "pk_test_51H0txPHPYfBrLxNhf9kSdSTTvwzTErYtO0Ju8CyKb2TRixaI9dSHPEyNEop4vXgPmvk0fLABZLfRLyMEFZ8pYSsm00upbfQaqi";

  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
