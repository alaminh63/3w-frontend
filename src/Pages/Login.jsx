import { useContext, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import useAxiosSecure from "../Hooks/AxiosSecure";
import { AuthContext } from "../providers/AuthProvider";
import Logout from "../utils/Logout";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const notify = () => toast.success("login Successfull");
  const [cookies, setCookie] = useCookies();
  const [showPassword, setShowPassword] = useState(false);
  const { fetchCurrentUser } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
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
      notify();
      navigate("/");
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
    <div className="d-flex justify-content-center mx-auto w-50 ">
      <div className="min-vh-100 d-flex align-items-center justify-content-center w-75">
        <div className="w-100 border border-black p-5 rounded-3 bg-light shadow-lg border-opacity-50">
          <h3 className="mb-4 text-center fw-bold">Login</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="fw-semibold position-relative "
              >
                Email address
              </label>
              <input
                className="form-control border border-black border-opacity-50 border-top-0 border-end-0 border-start-0 py-1 rounded-0"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="fw-semibold position-relative  "
              >
                Password
              </label>
              <input
                className="form-control border border-black border-opacity-50 border-top-0 border-end-0 border-start-0 py-1 rounded-0"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                className="border-0 bg-transparent  "
                type="button"
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <p className="text-center my-3 fw-bold">
            Do not have an account?{" "}
            <Link to="/register" className="text-decoration-none">
              Signup
            </Link>{" "}
          </p>
          <p className="text-center my-2 fw-semibold">Or</p>
          <p className="text-center my-2 fw-semibold    ">
            <FaGoogle className="  fs-4 icon-link-hover text-primary   " />
          </p>
        </div>
      </div>

    </div>
  );
};

export default Login;
