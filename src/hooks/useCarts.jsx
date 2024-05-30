import { useQuery } from "@tanstack/react-query";
import { getCart } from "../utils/api";
import useAuth from "./useAuth";

const useCarts = () => {
  const [Auth] = useAuth();
  const userEmail = Auth?.user?.email;
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart", userEmail],
    queryFn: async () => await getCart(userEmail),
  });
  return [data, isLoading, refetch];
};

export default useCarts;
