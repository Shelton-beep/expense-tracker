import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ExpenseForm } from "./ExpenseForm";

interface Props {
  handleSubmit: () => void;
}

function ModalDialog({ handleSubmit }: Props) {
  const [isShow, invokeModal] = useState(false);

  return (
    <>
      <Button variant="success" onClick={() => invokeModal(!isShow)}>
        Add Expense
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={() => invokeModal(!isShow)}>
          <Modal.Title>Add Expenses Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ExpenseForm onSubmit={handleSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => invokeModal(!isShow)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDialog;
