import { useContext, useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
const notify = () => toast.success("This person is ADMIN now");
const notify2 = () => toast.success("User Deleted");
import toast, { Toaster } from "react-hot-toast";
const UserManagement = () => {
  const { user } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();

  const handleMakeAdmin = async (id) => {
    try {
      const response = await axiosSecure.put(`/users/make-admin/${id}`);
      console.log(response);
      notify();
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
  const handleRemoveUser = async (id) => {
    try {
      const response = await axiosSecure.delete(`/users/deleteUser/${id}`);
      console.log(response);
      notify2();
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
  const {
    data: allUsers = [],
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/getAllUser`);
      return res.data.data;
    },
    enabled: false,
  });

  useEffect(() => {
    if (!isFetching) {
      refetch();
    }
  }, [allUsers, refetch, isFetching]);

  return (
    <div
      style={{
        marginTop: "5vh",
      }}
    >
      {" "}
      <customMyTransaction>
        <h3>
         Manage Users
        </h3>

        <table className="responstable">
          <tbody>
            <tr>
              <th>Serial</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
              <th>Manage</th>
            </tr>
            {allUsers?.map((item, index) => (
              <tr key={item?._id}>
                <td>
                  {index + 1}{" "}
                  <img
                    src={item.avatar}
                    style={{ width: "50px", height: "60px" }}
                    alt=""
                  />
                </td>

                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.userName}</td>
                <td>{item.role}</td>
                <td className="">
                  {item.role === "admin" ? (
                    <p> This is Admin</p>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleMakeAdmin(item._id)}
                        className="btn btn-success"
                      >
                        Make Admin
                      </button>
                      <button
                        onClick={() => handleRemoveUser(item._id)}
                        className="btn btn-danger"
                      >
                        Kick
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </customMyTransaction>
      <Toaster />;
    </div>
  );
};

export default UserManagement;
