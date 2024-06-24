import { Elements } from "@stripe/react-stripe-js";
import Loader from "../../../../components/Loaders/Loader";
import useAuth from "../../../../hooks/useAuth";
import useCarts from "../../../../hooks/useCarts";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(`${import.meta.env.VITE_PUBLISHIBLE_KEY}`);

const Payment = () => {
  const [Auth] = useAuth();
  const [data, isLoading, refetch] = useCarts();
  if (Auth?.loading || isLoading) {
    return <Loader />;
  }

  //carts items price
  const cartItemsPrice = data?.reduce((prevPrice, currentPrice) => {
    return prevPrice + currentPrice?.price;
  }, 0);
  //10% shipping cost based on carts items
  const shippingCost = Math.round(cartItemsPrice * 0.1);
  //total sum of shipping & carts items price
  const totalPrice = cartItemsPrice + shippingCost;

  return (
    <>
      <div className="flex flex-col w-full px-2 pt-8 sm:px-10 lg:px-20 xl:px-32 bg-gray-50">
        <div className="py-2 mt-6 border-t border-b">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Subtotal</p>
            <p className="font-semibold text-gray-900">${cartItemsPrice}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Shipping</p>
            <p className="font-semibold text-gray-900">${shippingCost}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="text-2xl font-semibold text-gray-900">${totalPrice}</p>
        </div>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm totalPrice={totalPrice} data={data} />
      </Elements>
    </>
  );
};

export default Payment;
