import { axiosPublic } from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";

const axiosSecure = useAxiosSecure;

export const allMenu = async () => {
  const res = await axiosPublic.get(`/menu`);
  const result = res.data;
  return result;
};

export const addToCart = async (itemData) => {
  const res = await axiosPublic.post(`/carts`, itemData);
  const result = res.data;
  return result;
};

export const getCart = async (userEmail) => {
  const res = await axiosPublic.get(`/carts?email=${userEmail}`);
  const result = res.data;
  return result;
};

export const deleteCartItem = async (itemId) => {
  const res = await axiosPublic.delete(`/carts/${itemId}`);
  const result = res.data;
  console.log(result);
  return result;
};

//store user info in db
export const sendUserToDB = async (user) => {
  const res = await axiosSecure.post(`/users`, user);
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

//create jwt token
export const createToken = async (userInfo) => {
  // console.log(userInfo);
  const res = await axiosSecure.post(`/jwt`, userInfo);
  const result = res.data;
  return result;
};

//find admin
export const findAdmin = async (email) => {
  const res = await axiosSecure.get(`/user/admin/${email}`);
  const result = res.data;
  // console.log(result);
  return result;
};
// export const findAdmin = async (email) => {
//   try {
//     const response = await axiosSecure.get(`/user/admin/${email}`);
//     if (response.status === 200) {
//       return response.data; // Assuming the response contains `isAdmin` field
//     }
//   } catch (error) {
//     console.error("Error fetching admin status:", error);
//   }
// };
