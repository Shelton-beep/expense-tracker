namespace ExpenseTrackerBackend.Services.CategoryService
{
    public interface ICategoryService
    {
        Task<ServiceResponse<List<GetCategoryDto>>> GetCategories();
        Task<ServiceResponse<GetCategoryDto>> GetCategory(int id);

        Task<ServiceResponse<List<GetCategoryDto>>> AddCategories(AddCategoryDto newCategory);
        Task<ServiceResponse<GetCategoryDto>> UpdateCategory(UpdateCategoryDto updatedCategory);
        Task<ServiceResponse<List<GetCategoryDto>>> DeleteCategory(int id);
    }
}
