import { useState } from "react";
import "./App.css";
import { ExpenseList } from "./components/expense/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "food", amount: 2, category: "food" },
    { id: 2, description: "food", amount: 2, category: "food" },
  ]);

  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
