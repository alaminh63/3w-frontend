import React from "react";

const TransenctionHistory = () => {
  return (
    <div>
      <div className="req_history">
        <h2>Request History</h2>
        <div className="tabs">
          <span>ETH Transaction History</span>
          <span className="active_tabs">TestLink Transaction History</span>
        </div>
        <div className="history_text">
          <div className="history">
            <table>
              <thead className="table__head">
                <tr>
                  <th>Sr</th>
                  <th>Time</th>
                  <th>Amount</th>
                  <th>Hash</th>
                </tr>
              </thead>
              <tbody className="table__body" style={{ textAlign: "center" }}>
                <tr>
                  <td>1</td>
                  <td>08:30 AM</td>
                  <td>748</td>
                  <td>7s7effkeurusue4</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>10:23 AM</td>
                  <td>974</td>
                  <td>sfe7r7sr4fer</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>11:10 AM</td>
                  <td>874</td>
                  <td>s4e7s8er</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransenctionHistory;
