
namespace ExpenseTrackerBackend.Services.ExpenseService
{
    public interface IExpenseService
    {
        Task<ServiceResponse<List<GetExpenseDto>>> GetAllExpenses();
        Task<ServiceResponse<GetExpenseDto>> GetExpenseById(int id);
        Task<ServiceResponse<List<GetExpenseDto>>> AddExpenses(AddExpenseDto newExpense);
        Task<ServiceResponse<GetExpenseDto>> UpdateExpense(UpdateExpenseDto updatedExpense);
        Task<ServiceResponse<List<GetExpenseDto>>> DeleteExpense(int id);
    }
}
