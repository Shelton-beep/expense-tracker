

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.X509Certificates;

namespace ExpenseTrackerBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpenseController : ControllerBase
    {
        
        private readonly IExpenseService _expenseService;

        public ExpenseController(IExpenseService expenseService)
        {
            _expenseService = expenseService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Expense>>> GetAllExpenses()
        {
            return Ok(await _expenseService.GetAllExpenses());
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Expense>> GetSingleExpense(int id)
        {
            return Ok(await _expenseService.GetExpenseById(id));
        }

        [HttpPost]
        public async Task<ActionResult<List<Expense>>> AddExpense(Expense newExpense)
        {
            
            return Ok(await _expenseService.AddExpenses(newExpense));
        }

       
    }
}
