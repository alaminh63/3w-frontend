import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/AxiosSecure";
import { useQuery } from "@tanstack/react-query";

const TransenctionHistory = () => {
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
    <div>
      <div className="req_history">
        <h2>Request History</h2>
        <div className="tabs d-flex gap-1">
          <button
            onClick={() => setActiveTab("ethTransaction")}
            className={`btn btn-primary ${
              activeTab === "ethTransaction" ? "active_tabs customPrimaryButton" : "custom-btn-transparent"
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
        <div className="">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr</th>
                <th scope="col">Time</th>
                <th scope="col">Amount</th>
                <th scope="col">Hash</th>
              </tr>
            </thead>
            <tbody>
              {transactionData?.[`${activeTab}History`]?.map(
                (transaction, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{transaction.createdAt}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction._id}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransenctionHistory;
