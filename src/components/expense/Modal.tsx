import { Modal, Button } from "react-bootstrap";
import { ExpenseForm } from "./ExpenseForm";

interface Props {
  handleSubmit: (expense: any) => void;
  onClick: () => void;
}

function ModalDialog({ handleSubmit, onClick }: Props) {
  return (
    <>
      <Button variant="success" onClick={onClick}>
        Add Expense
      </Button>
      <Modal>
        <Modal.Header closeButton onClick={onClick}>
          <Modal.Title>Add Expenses Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ExpenseForm onSubmit={handleSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onClick}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDialog;
