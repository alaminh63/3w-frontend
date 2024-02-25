import { Outlet } from "react-router-dom";

import NavigationBar from "../Copmonents/Shared/NavigationBar";
import Footer from "../Copmonents/Shared/Footer";

const Root = () => {
  return (
    <div>
      <NavigationBar />
      <div className="customBackgroundSecondary">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
