import { Modal, Button } from "react-bootstrap";
import { ExpenseForm, ExpenseFormData } from "./ExpenseForm";
import { useState } from "react";

interface Props {
  handleSubmit: (expense: ExpenseFormData) => void;
}

function ModalDialog({ handleSubmit }: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        variant="success"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        Add Expense
      </Button>
      <Modal show={showModal}>
        <Modal.Header closeButton onClick={() => setShowModal(!showModal)}>
          <Modal.Title>Add Expenses Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ExpenseForm onSubmit={(data) => handleSubmit(data)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowModal(!showModal)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDialog;
