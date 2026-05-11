using Microsoft.EntityFrameworkCore;
using TaskManagerAPI.Models;

namespace TaskManagerAPI.Data
{
    // AppDbContext connects our app to the SQL Server database
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // This creates a "Tasks" table in the database
        public DbSet<TaskItem> Tasks { get; set; }
    }
}
