import { useContext, useState } from "react";
import useAxiosSecure from "../../Hooks/AxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const WalletForm = () => {
  const { user } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();
  const [formData, setFormData] = useState({
    amount: "",
    transactionType: "testLinkTransaction",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosSecure.post("/request/requestPost", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Request failed:", error);
    }
  };
  const getButtonClass = (type) =>
    `btn ${
      formData.transactionType === type
        ? "btn-primary"
        : "btn btn-outline-primary"
    }`;
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-50">
        <div className="my-2">
          <label className="fw-semibold">Wallet Address</label>
          <input
            type="number"
            className="form-control border border-black border-opacity-50 py-1 rounded-0"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>

        <label className="fw-semibold">Request Type</label>
        <div className="my-1">
          <div className="btn-group w-75">
            <button
              type="button"
              className={getButtonClass("testLinkTransaction")}
              onClick={() =>
                handleChange({
                  target: {
                    name: "transactionType",
                    value: "testLinkTransaction",
                  },
                })
              }
            >
              20 Test Link
            </button>
            <button
              type="button"
              className={getButtonClass("ethTransaction")}
              onClick={() =>
                handleChange({
                  target: { name: "transactionType", value: "ethTransaction" },
                })
              }
            >
              0.5 ETH
            </button>
          </div>
        </div>
        <div className="my-1 mb-4">
          {user ? (
            <button
              className="btn btn-primary mt-2 text-white fw-semibold customBackgroundPrimary"
              type="submit"
            >
              Send Request
            </button>
          ) : (
            <Link to="/login">
              <button
                className="btn fst-italic btn-primary mt-2 text-white fw-semibold customBackgroundPrimary"
                type="submit"
              >
                To request you need to login first
              </button>
            </Link>
          )}
        </div>
      </form>
    </div>
  );
};

export default WalletForm;
