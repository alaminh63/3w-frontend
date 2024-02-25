import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Logout = () => {
  const { logout } = useContext(AuthContext);
  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      <h2>Logout Page</h2>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default Logout;
