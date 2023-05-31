import { useState } from "react";
import "./App.css";
import { Expense, ExpenseList } from "./components/expense/ExpenseList";
import { ExpenseFilter } from "./components/expense/ExpenseFilter";
import { ExpenseForm } from "./components/expense/ExpenseForm";
import ModalDialog from "./components/expense/Modal";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "food", amount: 0, category: "Groceries" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };

  const noun = visibleExpenses.length === 1 ? "expense" : "expenses";

  return (
    <>
      <div className="mb-3">
        <h1>Welcome To Expense Tracker</h1>
        <hr />
      </div>
      <div className="mb-5 d-flex gap-3">
        <ModalDialog handleSubmit={() => console.log("data")} />
        <h3>
          {visibleExpenses.length} {noun} to track.
        </h3>
      </div>
      <div className="mb-5">
        {showForm && (
          <ExpenseForm
            onSubmit={(expense) => {
              setExpenses([
                ...expenses,
                { ...expense, id: expenses.length + 1 },
              ]);
              setShowForm(!showForm);
            }}
          />
        )}
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
