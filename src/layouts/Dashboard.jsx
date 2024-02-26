import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div style={{ width: "20%", height: "100vh" }}>
        {/* Your left content goes here */}
        <div style={{ marginTop: "20vh" }} className="list-group ">
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
            Second Page
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
            Third Page
          </Link>
        </div>
      </div>
      <div style={{ width: "80%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
