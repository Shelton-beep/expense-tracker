using ExpenseTrackerBackend.Models;

namespace ExpenseTrackerBackend.Services.ExpenseService
{
    public class ExpenseService : IExpenseService
    {
        private static List<Expense> expenses = new List<Expense> {  new Expense(),
         new Expense
                {
                    Id = 1,
                    Description = "Spider Man",
                    Amount = 300,
                    Category = "Parker"
                },
                 new Expense
                {
                     Id = 2,
                    Description = "Spider Man",
                    Amount = 300,
                    Category = "Parker"
                }
        };
        public List<Expense> AddExpenses(Expense newExpense)
        {
            expenses.Add(newExpense);
            return expenses;
        }

        public List<Expense> GetAllExpenses()
        {
            return expenses;
        }

        public Expense GetExpenseById(int id)
        {
            return expenses.FirstOrDefault(e => e.Id == id);
        }
    }
}
