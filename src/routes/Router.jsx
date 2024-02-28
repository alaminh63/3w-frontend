import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import About from "../Pages/About";
import Dashboard from "../layouts/Dashboard";
import UserManagement from "../Pages/Dashboard/Admin/UserManagement";
import AllTransactionHistory from "../Pages/Dashboard/Admin/AllTransactionHistory";
import Profile from "../Pages/Dashboard/Users/Profile";
import ProtectedRoute from "../providers/ProtectedRoute";
import MyTransactions from "../Pages/Dashboard/Users/MyTransactions";

const Router = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "userManagement",
        element: <UserManagement />,
      },
      {
        path: "allTransaction",
        element: <AllTransactionHistory />,
      },
      {
        path: "myTransactions",
        element: <MyTransactions />,
      },
    ],
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <About />,
      },
    ],
  },
]);

export default Router;
