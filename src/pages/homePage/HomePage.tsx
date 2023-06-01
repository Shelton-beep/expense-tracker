import { useState } from "react";
import "./HomePage.css";
import { Expense, ExpenseList } from "../../components/expense/ExpenseList";
import { ExpenseFilter } from "../../components/expense/ExpenseFilter";
import ModalDialog from "../../components/expense/Modal";
import { TopBar } from "../../components/Navs/TopBar";
import { SideBar } from "../../components/Navs/SideBar";

export const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e: Expense) => e.category === selectedCategory)
    : expenses;

  const noun = visibleExpenses.length === 1 ? "expense" : "expenses";

  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <div className="centerContent">
          <div className="m-5 d-flex justify-content-between">
            <h3 className="px-5">
              {visibleExpenses.length} {selectedCategory} {noun} to track.
            </h3>
            <ModalDialog
              handleSubmit={(expense: Expense) => {
                setExpenses([
                  ...expenses,
                  { ...expense, id: expenses.length + 1 },
                ]);
              }}
            />
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
        </div>
      </div>
    </>
  );
};
