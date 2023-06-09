﻿

using Azure;
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
            var response = await _expenseService.GetExpenseById(id);
            if (response.Results == null)
            {
                return NotFound(response);
            }

            return Ok(response);
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
            if(response.Results == null) 
            {
                return NotFound(response);
            }

            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ServiceResponse<GetExpenseDto>>> DeleteExpense(int id)
        {
            var response = await _expenseService.DeleteExpense(id);
            if (response.Results == null)
            {
                return NotFound(response);
            }

            return Ok(response);
        }


    }
}
