import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  //   withCredentials: true,
});

//add header with token in every request call
axiosSecure.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("access-token");
    // console.log("intercepting", token);
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    console.log("error");
    return Promise.reject(error);
  }
);

// add something with api response
axiosSecure.interceptors.response.use(
  function (response) {
    // console.log("intercepting");
    return response;
  },
  (error) => {
    const status = error.response.status;

    // console.log(status);
    if (status === 401 || status === 403) {
      console.log("error in interceptor");
    }
    return Promise.reject(error);
  }
);

// }

export default axiosSecure;
