import { User } from "lucide-react";
import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div style={{ width: "20%", height: "100vh" }}>
        {/* Your left content goes here */}
        <Link className="text-decoration-none" to="/">
          <div className="custom text-center mt-5 fw-bold border w-75 mx-auto rounded-2 p-2 customBackgroundPrimary text-white d-flex align-items-center gap-1 justify-content-center">
            <FaHome /> Go To Homepage
          </div>
        </Link>

        <div style={{ marginTop: "10vh" }} className="list-group ">
          {user.role === "admin" ? (
            <div>
              <Link
                to="/dashboard/profile"
                className={`list-group-item
            list-group-item-action ${
              location.pathname === "/dashboard/profile" ? "active" : ""
            }`}
                style={{
                  backgroundColor:
                    location.pathname === "/dashboard/profile" ? "" : "",
                }}
                aria-current="true"
              >
                Profile
              </Link>
              <Link
                to="/dashboard/userManagement"
                className={`list-group-item
            list-group-item-action ${
              location.pathname === "/dashboard/userManagement" ? "active" : ""
            }`}
                style={{
                  backgroundColor:
                    location.pathname === "/dashboard/userManagement" ? "" : "",
                }}
              >
                User Management
              </Link>
              <Link
                to="/dashboard/allTransaction"
                className={`list-group-item
            list-group-item-action ${
              location.pathname === "/dashboard/allTransaction" ? "active" : ""
            }`}
                style={{
                  backgroundColor:
                    location.pathname === "/dashboard/allTransaction" ? "" : "",
                }}
              >
                All Transactions
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to="/dashboard/profile"
                className={`list-group-item
        list-group-item-action ${
          location.pathname === "/dashboard/profile" ? "active" : ""
        }`}
                style={{
                  backgroundColor:
                    location.pathname === "/dashboard/profile" ? "" : "",
                }}
                aria-current="true"
              >
                Profile
              </Link>
              <Link
                to="/dashboard/myTransactions"
                className={`list-group-item
        list-group-item-action ${
          location.pathname === "/dashboard/myTransactions" ? "active" : ""
        }`}
                style={{
                  backgroundColor:
                    location.pathname === "/dashboard/myTransactions" ? "" : "",
                }}
              >
                My All Transactions
              </Link>
            </div>
          )}
        </div>
      </div>
      <div style={{ width: "80%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
