

namespace ExpenseTrackerBackend.Data
{
    public class DataContext :DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) 
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(
                new Category
                {
                    Id = 1,
                    Name = "Books"
                },
                new Category
                {
                    Id = 2,
                    Name = "Movies"
                },
                new Category
                {
                    Id = 3,
                    Name = "Video Games"
                }
                );
        }

        public DbSet<Expense> Expenses => Set<Expense>();
        public DbSet<Category> Categories => Set<Category>();
    }
}
