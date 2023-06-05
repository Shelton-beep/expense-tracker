
using ExpenseTrackerBackend.Models;
using Microsoft.EntityFrameworkCore;
using System.Net;

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
        private readonly DataContext _context;

        public ExpenseService(IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _context = context;
        }
        public async Task<ServiceResponse<List<GetExpenseDto>>> AddExpenses(AddExpenseDto newExpense)
        {
            var serviceResponse = new ServiceResponse<List<GetExpenseDto>>();
            var dbExpenses = await _context.Expenses.AddAsync(_mapper.Map<Expense>(newExpense));
            await _context.SaveChangesAsync();
            serviceResponse.Data = _context.Expenses.Select(e => _mapper.Map<GetExpenseDto>(e)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetExpenseDto>>> DeleteExpense(int id)
        {
            var serviceResponse = new ServiceResponse<List<GetExpenseDto>>();

            var dbExpense = await _context.Expenses.FindAsync(id);
            if (dbExpense == null)
            {
                throw new Exception($"Expense with Id '{id}' not found");
            }

            _context.Expenses.Remove(dbExpense);

            await _context.SaveChangesAsync();
            serviceResponse.Data = _context.Expenses.Select(e => _mapper.Map<GetExpenseDto>(e)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetExpenseDto>>> GetAllExpenses()
        {
            var serviceResponse = new ServiceResponse<List<GetExpenseDto>>();
            var dbExpenses = await _context.Expenses.ToListAsync();
            serviceResponse.Data = dbExpenses.Select(e => _mapper.Map<GetExpenseDto>(e)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetExpenseDto>> GetExpenseById(int id)
        {
            var serviceResponse = new ServiceResponse<GetExpenseDto>();
            var dbExpense = await _context.Expenses.FirstOrDefaultAsync(e => e.Id == id);
            serviceResponse.Data = _mapper.Map<GetExpenseDto>(dbExpense);
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetExpenseDto>> UpdateExpense(UpdateExpenseDto updatedExpense)
        {
            var serviceResponse = new ServiceResponse<GetExpenseDto>();

            try
            {
                var dbExpense = await _context.Expenses.FirstOrDefaultAsync(e => e.Id == updatedExpense.Id);
                if(dbExpense == null)
                {
                    throw new Exception($"Expense with Id '{updatedExpense.Id}' not found");
                }
                dbExpense.Description = updatedExpense.Description;
                dbExpense.Amount = updatedExpense.Amount;
                dbExpense.Category = updatedExpense.Category;

                await _context.SaveChangesAsync();
                serviceResponse.Data = _mapper.Map<GetExpenseDto>(dbExpense);
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
