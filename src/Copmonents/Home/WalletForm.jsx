import { useState } from "react";

const WalletForm = () => {
  const [formData, setFormData] = useState({
    wallet: "",
    requestLink: "",
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
      <form onSubmit={handleSubmit}>
        <label>
          Wallet Address
          <input
            defaultValue="Your Wallet Address"
            type="text"
            name="wallet"
            value={formData.wallet}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Request Type
          <input
            defaultValue="20 Test Link"
            type="number"
            name="requestLink"
            value={formData.requestLink}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="submit ">Send Request</button>
      </form>
    </div>
  );
};

export default WalletForm;
