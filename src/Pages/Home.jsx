import React, { useContext } from "react";
import WalletForm from "../Copmonents/Home/WalletForm";
import { AuthContext } from "../providers/AuthProvider";
import TransenctionHistory from "../Copmonents/Home/TransenctionHistory";
import { IoIosWarning } from "react-icons/io";
const Home = () => {
  const { transectionName } = useContext(AuthContext);
  return (
    <div>
      <div className="customBackgroundPrimary d-flex  align-align-items-center py-3 justify-content-center">
        <h5 className="text-white ">Notice here</h5>
      </div>
      <div className="container">
        <div className="w-50">
          <h3 className="customPrimaryColor fs-2 fw-bold mt-3">
            Request testnet Link
          </h3>
          <p className="text-secondary fs-6">
            Get testnet LINK for an account on one of the supported blockchain
            testnets so you can create and test your own oracle and Chainlinked
            smart contract
          </p>
        </div>

        <div className="bg-light p-4">
          <div className="customBackgroundSecondary p-2 px-4  d-flex align-items-center jus">
            <IoIosWarning className="fs-4 customPrimaryColor" /> Your wallet is
            connected to <span className="fw-bold">`{transectionName}` </span>
            so you are requesting
            <span className="fw-bold">`{transectionName}`</span>
            Link/ETH.
          </div>
          <div>
            <WalletForm />
          </div>
          <div className="w-50">
            <TransenctionHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
