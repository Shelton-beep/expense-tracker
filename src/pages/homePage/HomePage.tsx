import { useEffect, useState } from "react";
import "./HomePage.css";
import axios, { CanceledError } from "axios";
import { Expense, ExpenseList } from "../../components/expense/ExpenseList";
import { ExpenseFilter } from "../../components/expense/ExpenseFilter";
import ModalDialog from "../../components/expense/Modal";
import { ExpensesTotal } from "../../components/expense/expenses-total/ExpensesTotal";
import { ExpenseFormData } from "../../components/expense/ExpenseForm";

interface fetchingExpenses {
  results: Expense[];
}

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    axios
      .get<fetchingExpenses>("https://localhost:7058/api/Expense/", {
        signal: controller.signal,
      })
      .then((res) => {
        setExpenses(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  //Http request for DELETING expenses
  const deleteExpense = (expense: Expense) => {
    const originalExpenses = [...expenses];
    setExpenses(expenses.filter((e) => e.id !== expense.id));

    axios
      .delete("https://localhost:7058/api/Expense/" + expense.id)
      .catch((err) => {
        setError(err.message);
        setExpenses(originalExpenses);
      });
  };

  //Http request for Fetching expenses
  const fetchData = () => {
    const controller = new AbortController();
    axios
      .get<fetchingExpenses>("https://localhost:7058/api/Expense/", {
        signal: controller.signal,
      })
      .then((res) => {
        setExpenses(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  };

  //Http request for ADDING/POSTING expenses
  const addExpense = (data: ExpenseFormData) => {
    axios.post("https://localhost:7058/api/Expense/", data).then((res) => {
      const newExpenses = res.data.results;
      setExpenses((expenses) => [...expenses, newExpenses]);
      fetchData();
    });
  };

  const updateExpense = (expense: Expense) => {
    const originalExpenses = [...expenses];
    const updatedExpense = { ...expense, expense };
    setExpenses(
      expenses.map((e) => (e.id === expense.id ? updatedExpense : e))
    );

    axios
      .put("https://localhost:7058/api/Expense/" + expense.id, updateExpense)
      .catch((err) => {
        setError(err.message);
        setExpenses(originalExpenses);
      });
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((e: Expense) => e.category === selectedCategory)
    : expenses;

  const noun = visibleExpenses.length === 1 ? "expense" : "expenses";

  const totalAmount = visibleExpenses
    .reduce((acc, expense) => expense.amount + acc, 0)
    .toFixed(2);

  if (error) {
    return <h1 className="text-danger">{error}</h1>;
  }
  return (
    <>
      <div className="d-flex homeContainer">
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
                {isLoading && <div className="spinner-border loader"></div>}
                {expenses.length !== 0 && (
                  <ExpenseFilter
                    onSelectCategory={(category) =>
                      setSelectedCategory(category)
                    }
                  />
                )}
              </div>
              <div className="ms-3 modalDialog">
                <ModalDialog handleSubmit={(data) => addExpense(data)} />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <hr />
          </div>
          {isLoading && <div className="spinner-border loader"></div>}
          <ExpenseList
            expenses={visibleExpenses}
            onDelete={(expense) => deleteExpense(expense)}
            onUpdate={(expense) => updateExpense(expense)}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
