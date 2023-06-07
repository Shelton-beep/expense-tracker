
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseTrackerBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public async Task<ActionResult<ServiceResponse<List<GetCategoryDto>>>> GetCategories()
        {
            return Ok(await _categoryService.GetCategories());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<GetCategoryDto>>>  GetCategoryById(int id)
        {
            var response = await _categoryService.GetCategory(id);
            if (response.Results == null)
            {
                return NotFound(response);
            }

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<GetCategoryDto>>>> AddCategory(AddCategoryDto newCategory)
        {

            return Ok(await _categoryService.AddCategories(newCategory));
        }

        [HttpPut]
        public async Task<ActionResult<ServiceResponse<List<GetCategoryDto>>>> UpdateCategory(UpdateCategoryDto updatedCategory)
        {
            var response = await _categoryService.UpdateCategory(updatedCategory);
            if (response.Results == null)
            {
                return NotFound(response);
            }

            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ServiceResponse<GetCategoryDto>>> DeleteCategory(int id)
        {
            var response = await _categoryService.DeleteCategory(id);
            if (response.Results == null)
            {
                return NotFound(response);
            }

            return Ok(response);
        }
    }
}
