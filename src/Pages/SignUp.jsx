import { useState } from "react";
import axios from "axios";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const notify = () => toast.success("SignUp Successfull ");
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    userName: "",
    password: "",
    avatar: null,
    coverImage: null,
  });

  const isImageFile = (file) => file.type.startsWith("image/");

  const handleChange = (e) => {
    const { name, type, files } = e.target;

    if (type === "file" && files.length > 0 && !isImageFile(files[0])) {
      // Handle invalid file type (show an error message or reset the input)
      console.error("Invalid file type. Please choose an image file.");
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      notify();
      console.log("Registration successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        // Display the error message to the user
        alert(`Registration failed: ${error.response.data.message}`);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center mx-auto w-50 ">
      <div className="min-vh-100 d-flex align-items-center justify-content-center   ">
        <div className="w-75  border border-black p-5 rounded-3 shadow-lg border-opacity-50 bg-light">
          <h3 className="mb-2 text-center fw-bold">Signup Here</h3>

          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <label className="fw-semibold">Full Name:</label>
              <input
                type="text"
                className="form-control border border-black border-opacity-50 border-top-0 border-end-0 border-start-0 py-1 rounded-0"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-2">
              <label className="fw-semibold">Email address</label>
              <input
                className="form-control border border-black border-opacity-50 border-top-0 border-end-0 border-start-0 py-1 rounded-0"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-2">
              <label className="fw-semibold ">Username:</label>
              <input
                className="form-control border border-black border-opacity-50 border-top-0 border-end-0 border-start-0 py-1 rounded-0"
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-2">
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

            <div className="d-flex justify-content-between gap-4 mb-3 ">
              <div className="">
                <label
                  htmlFor="exampleInputPassword1"
                  className="fw-semibold position-relative  "
                >
                  Avatar
                </label>
                <input
                  className="form-control border border-black border-opacity-50  py-1 rounded-0"
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="">
                <label className="fw-semibold ">Cover Image:</label>
                <input
                  className="form-control   border border-black border-opacity-50 py-1 rounded-0"
                  type="file"
                  name="coverImage"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
          <p className="text-center my-3 fw-bold">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none">
              Login
            </Link>
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

export default Signup;
