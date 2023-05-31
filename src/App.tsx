import { useState } from "react";
import "./App.css";
import { Expense, ExpenseList } from "./components/expense/ExpenseList";
import { ExpenseFilter } from "./components/expense/ExpenseFilter";
import ModalDialog from "./components/expense/Modal";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [showModal, setShowModal] = useState(false);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e: Expense) => e.category === selectedCategory)
    : expenses;

  const noun = visibleExpenses.length === 1 ? "expense" : "expenses";

  return (
    <>
      <div className="mb-3">
        <h1>Welcome To Expense Tracker</h1>
        <hr />
      </div>
      <div className="mb-5 d-flex gap-3">
        <ModalDialog
          onClick={() => setShowModal(!showModal)}
          handleSubmit={(expense: Expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
        <h3>
          {visibleExpenses.length} {noun} to track.
        </h3>
      </div>
      <div className="mb-5">
        <hr />
      </div>
      <div className="mb-3">
        {expenses.length !== 0 && (
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        )}
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
