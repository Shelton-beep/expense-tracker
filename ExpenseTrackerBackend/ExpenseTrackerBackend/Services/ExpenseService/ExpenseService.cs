
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
    }
}
