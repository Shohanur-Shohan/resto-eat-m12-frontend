import axios from "axios";

export const allMenu = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/menu`);
  // console.log(res, "api");
  const result = res.data;
  return result;
};
