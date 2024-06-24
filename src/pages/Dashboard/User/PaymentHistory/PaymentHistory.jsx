import { useQuery } from "@tanstack/react-query";
import { paymentHistory } from "../../../../utils/api";
import Loader from "../../../../components/Loaders/Loader";
import useAuth from "../../../../hooks/useAuth";

const PaymentHistory = () => {
  const [Auth] = useAuth();

  const email = Auth?.user?.email
  const {
    data,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["payment-history", email],
    queryFn: async () => await paymentHistory(email),
    enabled: !!email,
  });

  if(isLoading || Auth?.loading){
    return <Loader />
  }
  console.log(data)


  return <div>PaymentHistory</div>;
};

export default PaymentHistory;
