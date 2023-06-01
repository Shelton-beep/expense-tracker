
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.X509Certificates;

namespace ExpenseTrackerBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpenseController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Expense>>> GetAllExpenses()
        {
            return new List<Expense>
            {
                new Expense
                {
                    Description = "Spider Man",
                    Amount = 300,
                    Category = "Parker"
                },
                 new Expense
                {
                    Description = "Spider Man",
                    Amount = 300,
                    Category = "Parker"
                }
            };
        }

       
    }
}
