namespace ExpenseTrackerBackend.Dtos.Expense
{
    public class AddExpenseDto
    {
        
        public string Description { get; set; } = string.Empty;
        public int Amount { get; set; }
        public string Category { get; set; } = string.Empty;
    }
}
