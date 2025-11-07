import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://url-shorter-puce.vercel.app",
    withCredentials: true
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      console.error(`❌ ${status}:`, data?.message || data);
    } else if (error.request) {
      console.error("⚠️ Network Error: No response received");
    } else {
      console.error("⚠️ Error:", error.message);
    }

    return Promise.reject({
      message: error.response?.data?.message || error.message,
      status: error.response?.status,
    });
  }
);

export default axiosInstance;