import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>{user?.fullName}</h1>
    </div>
  );
};

export default Profile;
