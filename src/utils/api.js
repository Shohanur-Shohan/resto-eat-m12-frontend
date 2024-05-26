import { axiosPublic } from "../hooks/useAxiosPublic";
import { axiosSecure } from "../hooks/useAxiosSecure";

export const allMenu = async () => {
  const res = await axiosSecure.get(`/menu`);
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
  return result;
};

export const deleteCartItem = async (itemId) => {
  const res = await axiosSecure.delete(`/carts/${itemId}`);
  const result = res.data;
  return result;
};

//store user info in db
export const sendUserToDB = async (user) => {
  const res = await axiosPublic.post(`/users`, user);
  const result = res.data;
  return result;
};

//all users in dashboard/admin
export const allUsers = async () => {
  const res = await axiosSecure.get(`/users`);
  const result = res.data;
  return result;
};

//delete a user dashboard admin
export const deleteUser = async (userId) => {
  const res = await axiosSecure.delete(`/users/${userId}`);
  const result = res.data;
  return result;
};

//change role fo a user
export const updateUserRole = async (userId, newRole) => {
  const res = await axiosSecure.patch(`/user/admin/${userId}`, {
    role: newRole,
  });
  const result = res.data;
  return result;
};
