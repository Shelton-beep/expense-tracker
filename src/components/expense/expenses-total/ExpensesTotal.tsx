import "./ExpensesTotal.css";

interface Props {
  amount: string;
  figure: number;
  noun: string;
  selectedCategory: string;
}

export const ExpensesTotal = ({
  amount,
  figure,
  noun,
  selectedCategory,
}: Props) => {
  return (
    <div className="container d-flex p-5 justify-content-around expensesTotalContainer">
      <div className="p-3 text-center amountContainer">
        <h1>Total Expenses:</h1>
        <h3>${amount}</h3>
      </div>
      <div className="p-3 ms-4 text-center totalContainer">
        <h1>{selectedCategory}</h1>
        <h3>
          {figure} {noun} to track
        </h3>
      </div>
    </div>
  );
};
