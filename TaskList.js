// Component that displays the list of tasks
function TaskList({ tasks, onComplete, onDelete, filter }) {

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active')    return !task.isCompleted;
    if (filter === 'completed') return task.isCompleted;
    return true; // 'all'
  });

  // Show priority badge with colour
  const priorityBadge = (priority) => {
    const colours = { Low: '🟢', Medium: '🟡', High: '🔴' };
    return `${colours[priority] || '⚪'} ${priority}`;
  };

  // Format date nicely
  const formatDate = (dateStr) => {
    if (!dateStr) return null;
    return new Date(dateStr).toLocaleDateString('en-ZA', {
      day: '2-digit', month: 'short', year: 'numeric'
    });
  };

  if (filteredTasks.length === 0) {
    return <p className="empty-message">No tasks found. Add one above! 🎉</p>;
  }

  return (
    <div className="task-list">
      {filteredTasks.map(task => (
        <div key={task.id} className={`task-card ${task.isCompleted ? 'completed' : ''} priority-${task.priority.toLowerCase()}`}>
          <div className="task-header">
            <h3 className="task-title">{task.isCompleted ? '✅' : '⬜'} {task.title}</h3>
            <span className="priority-badge">{priorityBadge(task.priority)}</span>
          </div>
          {task.description && <p className="task-description">{task.description}</p>}
          <div className="task-footer">
            <span className="task-date">
              Created: {formatDate(task.createdAt)}
              {task.dueDate && ` · Due: ${formatDate(task.dueDate)}`}
            </span>
            <div className="task-actions">
              {!task.isCompleted && (
                <button className="btn-complete" onClick={() => onComplete(task.id)}>
                  ✔ Complete
                </button>
              )}
              <button className="btn-delete" onClick={() => onDelete(task.id)}>
                🗑 Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
