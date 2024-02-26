import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import useAxiosSecure from "../Hooks/AxiosSecure";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const { axiosSecure } = useAxiosSecure();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [transectionName, setTransectionName] = useState("Ethereum Kovan");

  const fetchCurrentUser = async () => {
    try {
      const token = cookies.accessToken;

      if (!token) {
        return;
      }

      const response = await axiosSecure.get("/users/currentUser");

      setUser(response.data?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axiosSecure.post("/users/logout");
      removeCookie("accessToken", cookies.accessToken);
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setUser(null);

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, [cookies, setCookie]);

  const authInfo = {
    loading,
    user,
    logout,
    fetchCurrentUser,
    transectionName,
    setTransectionName,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
