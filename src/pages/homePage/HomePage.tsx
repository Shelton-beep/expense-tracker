import { useState } from "react";
import "./HomePage.css";
import { Expense, ExpenseList } from "../../components/expense/ExpenseList";
import { ExpenseFilter } from "../../components/expense/ExpenseFilter";
import ModalDialog from "../../components/expense/Modal";
import { TopBar } from "../../components/Navs/TopBar";
import { SideBar } from "../../components/Navs/SideBar";
import { ExpensesTotal } from "../../components/expense/expenses-total/ExpensesTotal";

export const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e: Expense) => e.category === selectedCategory)
    : expenses;

  const noun = visibleExpenses.length === 1 ? "expense" : "expenses";

  const totalAmount = expenses
    .reduce((acc, expense) => expense.amount + acc, 0)
    .toFixed(2);

  return (
    <>
      <TopBar />
      <div className="d-flex homeContainer">
        <SideBar />
        <div className="container-fluid centerContent">
          <div className=" d-column justify-content-around">
            <ExpensesTotal
              amount={totalAmount}
              figure={visibleExpenses.length}
              selectedCategory={selectedCategory}
              noun={noun}
            />
            <div className="d-flex mb-3 justify-content-around">
              <div className="d-flex text-center justify-content-center align-items-center expenseFilter">
                <h6>FilterExpenses: </h6>
                {expenses.length !== 0 && (
                  <ExpenseFilter
                    onSelectCategory={(category) =>
                      setSelectedCategory(category)
                    }
                  />
                )}
              </div>
              <div className="ms-3 modalDialog">
                <ModalDialog
                  handleSubmit={(expense: Expense) => {
                    setExpenses([
                      ...expenses,
                      { ...expense, id: expenses.length + 1 },
                    ]);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <hr />
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
