using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagerAPI.Data;
using TaskManagerAPI.Models;

namespace TaskManagerAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly AppDbContext _context;

        // Inject the database context
        public TasksController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/tasks
        // Returns all tasks from the database
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskItem>>> GetTasks()
        {
            return await _context.Tasks.OrderByDescending(t => t.CreatedAt).ToListAsync();
        }

        // GET: api/tasks/5
        // Returns a single task by its ID
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskItem>> GetTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);

            if (task == null)
                return NotFound(new { message = $"Task with ID {id} not found." });

            return task;
        }

        // POST: api/tasks
        // Creates a new task
        [HttpPost]
        public async Task<ActionResult<TaskItem>> CreateTask(TaskItem task)
        {
            if (string.IsNullOrWhiteSpace(task.Title))
                return BadRequest(new { message = "Task title is required." });

            task.CreatedAt = DateTime.UtcNow;
            task.IsCompleted = false;

            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTask), new { id = task.Id }, task);
        }

        // PUT: api/tasks/5
        // Updates an existing task
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTask(int id, TaskItem updatedTask)
        {
            if (id != updatedTask.Id)
                return BadRequest(new { message = "ID mismatch." });

            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
                return NotFound(new { message = $"Task with ID {id} not found." });

            task.Title       = updatedTask.Title;
            task.Description = updatedTask.Description;
            task.Priority    = updatedTask.Priority;
            task.DueDate     = updatedTask.DueDate;
            task.IsCompleted = updatedTask.IsCompleted;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        // PATCH: api/tasks/5/complete
        // Marks a task as completed
        [HttpPatch("{id}/complete")]
        public async Task<IActionResult> CompleteTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
                return NotFound(new { message = $"Task with ID {id} not found." });

            task.IsCompleted = true;
            await _context.SaveChangesAsync();

            return Ok(new { message = "Task marked as completed." });
        }

        // DELETE: api/tasks/5
        // Deletes a task by ID
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
                return NotFound(new { message = $"Task with ID {id} not found." });

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Task deleted successfully." });
        }
    }
}
