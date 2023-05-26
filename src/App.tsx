import "./App.css";
import { ExpenseList } from "./components/expense/ExpenseList";

function App() {
  const expenses = [
    { id: 1, description: "food", amount: 2, category: "food" },
  ];

  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={() => console.log("deleted")}
      />
    </>
  );
}

export default App;
