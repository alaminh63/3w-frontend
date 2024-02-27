import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import useAxiosSecure from "../Hooks/AxiosSecure";
import toast, { Toaster } from "react-hot-toast";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const { axiosSecure } = useAxiosSecure();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [transectionName, setTransectionName] = useState("Ethereum Kovan");

  const notify = () => toast.success("Logout Successfull");
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
      notify();
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setUser(null);

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, [cookies]);

  const authInfo = {
    loading,
    user,
    logout,
    fetchCurrentUser,
    transectionName,
    setTransectionName,
  };
  <Toaster />;
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
