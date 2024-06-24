import { useElements } from "@stripe/react-stripe-js";
import { useStripe } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import axiosSecure from "../../../../hooks/useAxiosSecure";
import PropTypes from "prop-types";
import useAuth from "../../../../hooks/useAuth";
import Loader from "../../../../components/Loaders/Loader";
import toast from "react-hot-toast";
import { paymentDoneInfo } from "../../../../utils/api";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ totalPrice, data }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [transactionId, setTransactionID] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const [Auth] = useAuth();
  const [clientSecretLoaded, setClientSecretLoaded] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (clientSecretLoaded && totalPrice > 0) {
      (async () => {
        const res = await axiosSecure.post(`/create-payment-intent`, {
          price: totalPrice,
        });
        // console.log(res?.data?.clientSecret);
        setClientSecret(res?.data?.clientSecret);
        setClientSecretLoaded(false);
      })();
    }
  }, [totalPrice, clientSecretLoaded]);

  const userCartsItemsId = data?.map((item) => item?._id);
  const userCartsMenuId = data?.map((item) => item?.menuID);
  // console.log(userCartsItems);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || loading) {
      return;
    }
    setLoading(true);
    // setClientSecretLoaded(true);
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment failed", error);
      setErrorMessage(error?.message);
    } else {
      // console.log("Payment Method", paymentMethod);
      setErrorMessage("");
    }

    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(`${clientSecret}`, {
        payment_method: {
          card: card,
          billing_details: {
            name: Auth?.user?.displayName || "annonymous",
            email: Auth?.user?.email || "annonymous",
          },
        },
      });

    if (confirmError) {
      toast.error("Payment failed");
    } else {
      // console.log("payment entent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        toast.success("Payment success");
        setTransactionID(paymentIntent?.id);

        //send data to database
        const paymentData = {
          email: Auth?.user?.email,
          transactionId: paymentIntent?.id,
          price: totalPrice,
          date: new Date(),
          user_CartIds: userCartsItemsId,
          user_menuIds: userCartsMenuId,
          status: "pending",
        };

        const result = await paymentDoneInfo(paymentData);
        if(result?.deleteCartData?.deletedCount > 0){
          navigate('/dashboard/my-cart')
        }
      }
    }
    setLoading(false);
    // setClientSecretLoaded(false);
  };

  if (!Auth?.user || !stripe || !elements) {
    return <Loader />;
  }
  return (
    <div className="max-w-[1000px] mx-auto mt-10">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          className="w-full px-6 py-3 mt-6 font-medium text-white bg-gray-900 rounded-md"
          type="submit"
          disabled={!stripe || !clientSecret || loading}
        >
          Pay
        </button>
      </form>
      <p className="text-red-600">{errorMessage}</p>
      {transactionId && (
        <p className="text-green-600">Transaction Id: {transactionId}</p>
      )}
    </div>
  );
};
CheckoutForm.propTypes = {
  totalPrice: PropTypes.number,
  data: PropTypes.array,
};
export default CheckoutForm;
