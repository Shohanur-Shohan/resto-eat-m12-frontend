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

export const getCart = async (userEmail) => {
  const res = await axiosSecure.get(`/carts?email=${userEmail}`);
  const result = res.data;
  // console.log(result);
  return result;
};

export const deleteCartItem = async (itemId) => {
  const res = await axiosSecure.delete(`/carts/${itemId}`);
  const result = res.data;
  // console.log(result);
  return result;
};
