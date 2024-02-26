import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />

      <Modal.Body className="p-4">
        <h4 className="mb-4">Connect Your Wallet</h4>
        <div className="d-flex  mx-auto gap-2">
          <div className="card w-50 py-4">
            <img
              src="https://faucets1.netlify.app/static/media/MetaMask_Fox.svg.d9c41a5680a1daaae624.png"
              className="mx-auto card-img-top w-50"
              alt="..."
            />
            <div className="mx-auto">
              <h4 className="customPrimaryColor">Meta</h4>
            </div>
          </div>
          <div className="card w-50 d-flex flex-column justify-content-center ">
            <img
              src="https://faucets.netlify.app/static/media/WalletConnect.d0b10794.svg"
              className="mx-auto card-img-top  w-50"
              alt="..."
            />
            <div className="mx-auto">
              <h4 className="customPrimaryColor">Wallet Connect</h4>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const CustomModal = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Connect Wallet
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default CustomModal;
