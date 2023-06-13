export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (expense: Expense) => void;
  onUpdate: (expense: Expense) => void;
}

export const ExpenseList = ({ expenses, onDelete, onUpdate }: Props) => {
  if (expenses.length === 0)
    return (
      <h2>There are no expenses to show. Begin adding expenses to track...</h2>
    );
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-secondary mx-3"
                  onClick={() => onUpdate(expense)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expense)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
