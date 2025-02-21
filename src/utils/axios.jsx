import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_TMDB_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
});

export default axiosInstance;
