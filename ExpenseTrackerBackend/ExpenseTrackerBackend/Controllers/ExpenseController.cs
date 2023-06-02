

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
        public async Task<ActionResult<ServiceResponse<List<GetExpenseDto>>>> GetAllExpenses()
        {
            return Ok(await _expenseService.GetAllExpenses());
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<GetExpenseDto>>> GetSingleExpense(int id)
        {
            return Ok(await _expenseService.GetExpenseById(id)); 
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<GetExpenseDto>>>> AddExpense(AddExpenseDto newExpense)
        {
            
            return Ok(await _expenseService.AddExpenses(newExpense));
        }

        [HttpPut]
        public async Task<ActionResult<ServiceResponse<List<GetExpenseDto>>>> UpdateExpense(UpdateExpenseDto updatedExpense)
        {
            var response = await _expenseService.UpdateExpense(updatedExpense);
            if(response.Data == null) 
            {
                return NotFound(response);
            }

            return Ok(response);
        }


    }
}
