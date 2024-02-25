import React, { useContext } from "react";
import WalletForm from "../Copmonents/Home/WalletForm";
import { AuthContext } from "../providers/AuthProvider";
import TransenctionHistory from "../Copmonents/Home/TransenctionHistory";

const Home = () => {
  const { transectionName } = useContext(AuthContext);
  return (
    <div>
      <div className="bg-primary d-flex  align-align-items-center py-3 justify-content-center">
        <h5 className="text-white">Notice here</h5>
      </div>
      <div className="container">
        <h3>Request testnet Link</h3>
        <p>
          Get testnet LINK for an account on one of the supported blockchain
          testnets so you can create and test your own oracle and Chainlinked
          smart contract
        </p>
      </div>
      <div>
        <div>
          <p>
            Your wallet is connected to
            <span className="text-primary">{transectionName}</span>, so you are
            requesting
            <span className="text-primary">{transectionName}</span>
            Link/ETH.
          </p>
        </div>
        <div>
          <WalletForm />
        </div>
        <div>
          <TransenctionHistory />
        </div>
      </div>
    </div>
  );
};

export default Home;
