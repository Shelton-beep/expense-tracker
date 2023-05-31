import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const SuccessModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal show={!showModal}>
        <Modal.Header closeButton onClick={() => setShowModal(!showModal)}>
          <Modal.Title>Add Expenses Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>Successfully submitted form</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
