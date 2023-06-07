namespace ExpenseTrackerBackend
{
    public class AutoMapperProfile:Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Expense, GetExpenseDto>();
            CreateMap<AddExpenseDto, Expense>();

            CreateMap<Category, GetCategoryDto>();
            CreateMap<AddCategoryDto, Category>();
        }
    }
}
