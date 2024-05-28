import axios from "axios";

const useAxiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  //   withCredentials: true,
});
// const useAxiosSecure = () => {
useAxiosSecure.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("access-token");
    console.log("intercepting", token);
    return config;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    console.log("error");
    return Promise.reject(error);
  }
);
//   return axiosSecure;
// };

export default useAxiosSecure;
