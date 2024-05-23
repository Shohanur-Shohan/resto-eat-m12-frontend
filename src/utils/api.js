import { axiosSecure } from "../hooks/useAxiosSecure";

export const allMenu = async () => {
  const res = await axiosSecure.get(`/menu`);
  // console.log(res, "api");
  const result = res.data;
  return result;
};

export const addToCart = async (itemData) => {
  const res = await axiosSecure.post(`/carts`, itemData);
  const result = res.data;
  return result;
};
