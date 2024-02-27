import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return <h2>Loading</h2>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
