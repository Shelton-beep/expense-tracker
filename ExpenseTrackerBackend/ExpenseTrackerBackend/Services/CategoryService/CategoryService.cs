
using ExpenseTrackerBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace ExpenseTrackerBackend.Services.CategoryService
{
    public class CategoryService : ICategoryService
    {
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        private List<Category> categories = new List<Category>
        {
            new Category { Id = 1, Name = "Stationery"},
            new Category { Id = 2, Name = "Food"}

        };

        public CategoryService(IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<ServiceResponse<List<GetCategoryDto>>> AddCategories(AddCategoryDto newCategory)
        {

            var serviceResponse = new ServiceResponse<List<GetCategoryDto>>();
            var dbExpenses = await _context.Categories.AddAsync(_mapper.Map<Category>(newCategory));
            await _context.SaveChangesAsync();
            serviceResponse.Results = _context.Categories.Select(e => _mapper.Map<GetCategoryDto>(e)).ToList();
            return serviceResponse;

        }

        public async Task<ServiceResponse<List<GetCategoryDto>>> DeleteCategory(int id)
        {
            var serviceResponse = new ServiceResponse<List<GetCategoryDto>>();
            try
            {
                var dbCategory = await _context.Categories.FindAsync(id);
                if (dbCategory == null)
                {
                    serviceResponse.Results = null;
                }
                _context.Categories.Remove(dbCategory);

            }
            catch
            {
                serviceResponse.Success = false;
                serviceResponse.Message = "Category with Id '{id}' not found";
            }

            await _context.SaveChangesAsync();
            serviceResponse.Results = _context.Categories.Select(e => _mapper.Map<GetCategoryDto>(e)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetCategoryDto>>> GetCategories()
        {

            var categoryResponse = new ServiceResponse<List<GetCategoryDto>>();
            var dbCategories = await _context.Categories.ToListAsync();
            categoryResponse.Results = dbCategories.Select(e => _mapper.Map<GetCategoryDto>(e)).ToList();
            return categoryResponse; 
        }

        public async Task<ServiceResponse<GetCategoryDto>> GetCategory(int id)
        {
            var serviceResponse = new ServiceResponse<GetCategoryDto>();
            var dbCategory = await _context.Categories.FirstOrDefaultAsync(e => e.Id == id);
            serviceResponse.Results = _mapper.Map<GetCategoryDto>(dbCategory);
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetCategoryDto>> UpdateCategory(UpdateCategoryDto updatedCategory)
        {
            var serviceResponse = new ServiceResponse<GetCategoryDto>();

            try
            {
                var dbCategory = await _context.Categories.FirstOrDefaultAsync(e => e.Id == updatedCategory.Id);
                if (dbCategory == null)
                {
                    throw new Exception($"Category with Id '{updatedCategory.Id}' not found");
                }
                dbCategory.Name = updatedCategory.Name;

                await _context.SaveChangesAsync();
                serviceResponse.Results = _mapper.Map<GetCategoryDto>(dbCategory);
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
