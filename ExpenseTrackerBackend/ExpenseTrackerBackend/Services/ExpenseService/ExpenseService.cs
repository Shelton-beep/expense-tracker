
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
        private readonly IMapper _mapper;

        public ExpenseService(IMapper mapper)
        {
            _mapper = mapper;
        }
        public async Task<ServiceResponse<List<GetExpenseDto>>> AddExpenses(AddExpenseDto newExpense)
        {
            var serviceResponse = new ServiceResponse<List<GetExpenseDto>>();
            expenses.Add(_mapper.Map<Expense>(newExpense));
            serviceResponse.Data = expenses.Select(e => _mapper.Map<GetExpenseDto>(e)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetExpenseDto>>> DeleteExpense(int id)
        {
            var serviceResponse = new ServiceResponse<List<GetExpenseDto>>();

            try
            {
                var expense = expenses.FirstOrDefault(e => e.Id == id);
                if (expense == null)
                {
                    throw new Exception($"Expense with Id '{id}' not found");

                }

                expenses.Remove(expense);
                serviceResponse.Data = expenses.Select(e => _mapper.Map<GetExpenseDto>(e)).ToList();

            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetExpenseDto>>> GetAllExpenses()
        {
            var serviceResponse = new ServiceResponse<List<GetExpenseDto>>();
            serviceResponse.Data = expenses.Select(e => _mapper.Map<GetExpenseDto>(e)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetExpenseDto>> GetExpenseById(int id)
        {
            var serviceResponse = new ServiceResponse<GetExpenseDto>();
            var expense = expenses.FirstOrDefault(e => e.Id == id);
            serviceResponse.Data = _mapper.Map<GetExpenseDto>(expense);
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetExpenseDto>> UpdateExpense(UpdateExpenseDto updatedExpense)
        {
            var serviceResponse = new ServiceResponse<GetExpenseDto>();

            try
            {
                var expense = expenses.FirstOrDefault(e => e.Id == updatedExpense.Id);
                if(expense == null)
                {
                    throw new Exception($"Expense with Id '{updatedExpense.Id}' not found");
                }
                expense.Description = updatedExpense.Description;
                expense.Amount = updatedExpense.Amount;
                expense.Category = updatedExpense.Category;

                serviceResponse.Data = _mapper.Map<GetExpenseDto>(expense);
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }
    }
}
