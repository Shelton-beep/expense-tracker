namespace ExpenseTrackerBackend.Models
{
    public class ServiceResponse<T>
    {
        public T? Results { get; set; }
        public bool Success { get; set; } = true;
        public string Message { get; set; } = string.Empty;
    }
}
