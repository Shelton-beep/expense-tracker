namespace ExpenseTrackerBackend.Services.ExpenseService
{
    public interface IExpenseService
    {
        Task<List<Expense>> GetAllExpenses();
        Task<Expense> GetExpenseById(int id);
        Task<List<Expense>> AddExpenses(Expense newExpense);
    }
}
