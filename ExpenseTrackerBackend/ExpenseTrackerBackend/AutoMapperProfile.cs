namespace ExpenseTrackerBackend
{
    public class AutoMapperProfile:Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Expense, GetExpenseDto>();
        }
    }
}
