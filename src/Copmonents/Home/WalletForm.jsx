// import { useState } from "react";

// const WalletForm = () => {
//   const [formData, setFormData] = useState({
//     wallet: "",
//     requestLink: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log(formData);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="w-50">
//           <div className="my-2">
//             <label className="fw-semibold"> Wallet Address</label>
//             <input
//               type="text"
//               className="form-control border border-black border-opacity-50 py-1 rounded-0"
//               name="wallet"
//               value={formData.wallet}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <label className="fw-semibold">Request Type</label>
//           <div className="d-flex justify-content-between gap-2">
//             <input
//               placeholder="20 Test Link"
//               type="number"
//               name="requestLink"
//               className="form-control border border-black border-opacity-50 py-1 rounded-0"
//               value={formData.requestLink}
//               onChange={handleChange}
//               required
//             />

//             <input
//               placeholder="0.5ETH"
//               type="number"
//               name="requestLink"
//               className="form-control border border-black border-opacity-50 py-1 rounded-0"
//               value={formData.requestLink}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <br />

//         <button
//           className="btn btn-transparent text-white fw-semibold customBackgroundPrimary"
//           type="submit  "
//         >
//           Send Request
//         </button>
//       </form>
//     </div>
//   );
// };

// export default WalletForm;
import { useState } from "react";

const WalletForm = () => {
  const [formData, setFormData] = useState({
    wallet: "",
    requestType: "testLink",
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
            type="text"
            className="form-control border border-black border-opacity-50 py-1 rounded-0"
            name="wallet"
            value={formData.wallet}
            onChange={handleChange}
            required
          />
        </div>

        <label className="fw-semibold">Request Type</label>
        <div className="btn-group">
          <button
            type="button"
            className={`btn ${
              formData.requestType === "testLink"
                ? "btn-primary"
                : "btn-secondary"
            }`}
            onClick={() =>
              handleChange({
                target: { name: "requestType", value: "testLink" },
              })
            }
          >
            Test Link
          </button>
          <button
            type="button"
            className={`btn ${
              formData.requestType === "ETH" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() =>
              handleChange({ target: { name: "requestType", value: "ETH" } })
            }
          >
            ETH
          </button>
        </div>

        <button
          className="btn btn-transparent text-white fw-semibold customBackgroundPrimary"
          type="submit"
        >
          Send Request
        </button>
      </form>
    </div>
  );
};

export default WalletForm;
