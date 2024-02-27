import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/AxiosSecure";

const AllTransactionHistory = () => {
  const { user } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();

  const {
    data: allTransactionData = [],
    refetch: transactionRefetch,
    isFetching: transactionIsFetching,
  } = useQuery({
    queryKey: ["allTransactionData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/request/getRequest`);
      return res.data.data;
    },
    enabled: false,
  });

  useEffect(() => {
    if (!transactionIsFetching) {
      transactionRefetch();
    }
  }, [transactionIsFetching, transactionRefetch]);

  const [selectedTransactionId, setSelectedTransactionId] = useState(null);

  const singleUser = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const promises = allTransactionData.map(async (item) => {
        const res = await axiosSecure.get(`/users/getSingleUser/${item.owner}`);
        return res.data.data;
      });
      return Promise.all(promises);
    },
    enabled: false,
  });

  const [singleTransaction, setSingleTransaction] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedTransactionId) {
          const response = await axiosSecure.get(
            `/request/getSingleRequestAdmin/${selectedTransactionId}`
          );
          setSingleTransaction(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [axiosSecure, selectedTransactionId]);

  const handleUserEmailClick = (transactionId) => {
    setSelectedTransactionId(transactionId);
  };
  const [activeTab, setActiveTab] = useState("testLinkTransaction");
  return (
    <div className="mt-5">
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ width: "15%", height: "100vh" }}>
          {allTransactionData.map((item, index) => (
            <div key={item._id}>
              {singleUser.data && singleUser.data[index] && (
                <div key={singleUser.data[index]._id}>
                  <div
                    key={singleUser.data[index]._id}
                    onClick={() => handleUserEmailClick(item._id)}
                    style={{ cursor: "pointer" }}
                  >
                    {singleUser.data[index].email}
                  </div>
                </div>
              )}
              <div></div>
            </div>
          ))}
        </div>
        <div style={{ width: "85%" }}>
          {selectedTransactionId === null ? (
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
                    <th>Date</th>
                  </tr>

                  <tr>
                    <td>
                      <h3>Click On Name For See Details</h3>
                    </td>
                  </tr>
                </tbody>
              </table>
            </customMyTransaction>
          ) : (
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
                  {singleTransaction?.[`${activeTab}History`]?.map(
                    (item, index) => (
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
                    )
                  )}
                </tbody>
              </table>
            </customMyTransaction>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllTransactionHistory;
