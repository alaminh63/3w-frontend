import { GoogleLogin } from "react-google-login";
import axios from "axios";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const GoogleLoginButton = () => {
  const { getUserData } = useContext(AuthContext);

  const responseGoogle = async (response) => {
    try {
      // Send the Google token to your backend for verification and login
      const { data } = await axios.post("/api/v1/users/auth/google", {
        tokenId: response.tokenId,
      });

      // After successful login, get user data
      await getUserData();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GoogleLogin
      clientId="378372048616-j0qpmfimd787qsho21kcr28u8nij879v.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleLoginButton;
