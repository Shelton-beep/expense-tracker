import { useState } from "react";
import "./SuccessModal.css";
import { Modal } from "react-bootstrap";
import { CheckCircle } from "@mui/icons-material";

export const SuccessModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal show={!showModal}>
        <Modal.Header closeButton onClick={() => setShowModal(!showModal)}>
          <Modal.Title className="heading">Add Expenses Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <CheckCircle className="check" />
          <h1 className="text">Successfully submitted form</h1>
        </Modal.Body>
        <Modal.Footer>
          <small className="footer">Shelton Simbi Inc.</small>
        </Modal.Footer>
      </Modal>
    </>
  );
};
