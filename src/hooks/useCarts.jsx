import { useQuery } from "@tanstack/react-query";
import { getCart } from "../utils/api";
import useAuth from "./useAuth";

const useCarts = () => {
  const { user } = useAuth();
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => await getCart(user?.email),
  });
  return [data, isLoading, refetch];
};

export default useCarts;
