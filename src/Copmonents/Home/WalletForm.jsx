import { useState } from "react";

const WalletForm = () => {
  const [formData, setFormData] = useState({
    amount: "",
    transactionType: "testLinkTransaction",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
              className={`btn ${
                formData.transactionType === "testLinkTransaction"
                  ? "btn-primary"
                  : "btn btn-outline-primary"
              }`}
              onClick={() =>
                handleChange({
                  target: { name: "transactionType", value: "testLinkTransaction" },
                })
              }
            >
              20 Test Link
            </button>
            <button
              type="button"
              className={`btn ${
                formData.transactionType === "ethTransaction"
                  ? "btn-primary"
                  : "btn btn-outline-primary"
              }`}
              onClick={() =>
                handleChange({ target: { name: "transactionType", value: "ethTransaction" } })
              }
            >
           0.5 ETH
            </button>
          </div>
        </div>

        <button
          className="btn btn-primary mt-2 text-white fw-semibold customBackgroundPrimary"
          type="submit"
        >
          Send Request
        </button>
      </form>
    </div>
  );
};

export default WalletForm;
