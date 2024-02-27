import { useContext, useEffect, useState } from "react";
import "./MyTransaction.scss";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/AxiosSecure";
const MyTransactions = () => {
  const { user } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();

  const {
    data: transactionData = {},
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["transactionData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/request/getSingleRequest`);
      return res.data.data;
    },
    enabled: false,
  });

  useEffect(() => {
    if (!isFetching) {
      refetch();
    }
  }, [isFetching, refetch]);

  const [activeTab, setActiveTab] = useState("testLinkTransaction");
  return (
    <div className="mt-5">
      <customMyTransaction>
        <h3>
          Responstable <span className="text-success">2.0</span> by{" "}
          <span>{user.fullName}</span>
        </h3>
        <div className="tabs d-flex gap-1">
          <button
            onClick={() => setActiveTab("ethTransaction")}
            className={`btn btn-primary ${
              activeTab === "ethTransaction"
                ? "active_tabs customPrimaryButton"
                : "custom-btn-transparent"
            }`}
          >
            ETH Transaction History
          </button>
          <button
            onClick={() => setActiveTab("testLinkTransaction")}
            className={`btn btn-primary ${
              activeTab === "testLinkTransaction"
                ? "active_tabs"
                : "custom-btn-transparent"
            }`}
          >
            TestLink Transaction History
          </button>
        </div>
        <table className="responstable">
          <tbody>
            <tr>
              <th>Serial</th>
              <th data-th="Driver details">
                <span>Wallet Account</span>
              </th>
              <th>Ammount</th>
              <th>Hash</th>
              <th>Date</th>
            </tr>
            {transactionData?.[`${activeTab}History`]?.map((item, index) => (
              <tr key={item?._id}>
                <td>
                  <input type="radio" /> {""}
                  {index + 1}
                </td>
                <td>{item.connectedAccount}</td>
                <td>{item.amount}</td>
                <td>{item._id}</td>
                <td>{item.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </customMyTransaction>
    </div>
  );
};

export default MyTransactions;
