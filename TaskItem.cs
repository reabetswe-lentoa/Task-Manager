namespace TaskManagerAPI.Models
{
    public class TaskItem
    {
        public int Id { get; set; }

        // Title of the task - required
        public string Title { get; set; } = string.Empty;

        // Optional longer description
        public string? Description { get; set; }

        // Whether the task is done or not
        public bool IsCompleted { get; set; } = false;

        // Priority: Low, Medium, High
        public string Priority { get; set; } = "Medium";

        // When the task was created - set automatically
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Optional due date
        public DateTime? DueDate { get; set; }
    }
}
