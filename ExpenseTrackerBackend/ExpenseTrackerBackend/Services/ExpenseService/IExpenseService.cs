
namespace ExpenseTrackerBackend.Services.ExpenseService
{
    public interface IExpenseService
    {
        Task<ServiceResponse<List<GetExpenseDto>>> GetAllExpenses();
        Task<ServiceResponse<GetExpenseDto>> GetExpenseById(int id);
        Task<ServiceResponse<List<GetExpenseDto>>> AddExpenses(AddExpenseDto newExpense);
    }
}
