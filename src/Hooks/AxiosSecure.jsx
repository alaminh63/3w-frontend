import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const axiosSecure = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  credentials: "include",
});

const useAxiosSecure = () => {
  const [cookies] = useCookies(["accessToken"]);
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = cookies["accessToken"]; 
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });
  }, [cookies]);

  return { axiosSecure };
};

export default useAxiosSecure;
