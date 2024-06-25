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

//upload image to imageBB from /dashboard/add-items
export const uploadRecipeImage = async (imageFile) => {
  try {
    const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

    const res = await axiosPublic.post(imageHostingApi, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const result = res?.data;
    return result;
  } catch (error) {
    // console.log(error, "Can't upload image to server");
  }
};

  //payment done info to db
  export const paymentDoneInfo = async (paymentData)=>{
    const res = await axiosSecure.post('/payment', paymentData);
    const result = res?.data;
    
    return result;
  }

  //find payment history
export const paymentHistory = async (email) => {
  const res = await axiosSecure.get(`/payments/${email}`);
  const result = res.data;
  return result;
};



//add item to db menu from /dashboard/add-items
export const addMenuItem = async (menuItem) => {
  // console.log(userInfo);
  const res = await axiosSecure.post(`/menu`, menuItem);
  const result = res.data;
  return result;
};

//admin dashboard statistics
export const adminStats = async (email) => {
  const res = await axiosSecure.get(`/admin_stats/${email}`);
  const result = res.data;
  return result;
};

//order stats in admin dashboard
export const orderStats = async (email) => {
  const res = await axiosSecure.get(`/order-stats/${email}`);
  const result = res.data;
  return result;
};