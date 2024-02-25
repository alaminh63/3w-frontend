import { useContext, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import useAxiosSecure from "../Hooks/AxiosSecure";
import { AuthContext } from "../providers/AuthProvider";
import Logout from "../utils/Logout";

const Login = () => {
  const [cookies, setCookie] = useCookies();
  const { fetchCurrentUser } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosSecure.post("/users/login", formData);

      const accessToken = response.data.data.accessToken;

      // Set the access token in cookies
      setCookie("accessToken", accessToken);

      // Fetch current user
      await fetchCurrentUser();
    } catch (error) {
      console.error("Login failed:", error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(`Login failed: ${error.response.data.message}`);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="submit">Login</button>
      </form>
      <Logout />
    </div>
  );
};

export default Login;
