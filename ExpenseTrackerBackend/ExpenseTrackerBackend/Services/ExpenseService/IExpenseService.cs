namespace ExpenseTrackerBackend.Services.ExpenseService
{
    public interface IExpenseService
    {
        List<Expense> GetAllExpenses();
        Expense GetExpenseById(int id);
        List<Expense> AddExpenses(Expense newExpense);
    }
}
