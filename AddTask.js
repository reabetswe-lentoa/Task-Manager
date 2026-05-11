import { useState } from 'react';

// Component for adding a new task
function AddTask({ onTaskAdded }) {
  const [title, setTitle]           = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority]     = useState('Medium');
  const [dueDate, setDueDate]       = useState('');
  const [error, setError]           = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Please enter a task title.');
      return;
    }
    const newTask = {
      title,
      description,
      priority,
      dueDate: dueDate || null
    };
    onTaskAdded(newTask);
    setTitle('');
    setDescription('');
    setPriority('Medium');
    setDueDate('');
    setError('');
  };

  return (
    <div className="add-task-form">
      <h2>➕ Add New Task</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task title *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
        />
        <div className="form-row">
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">🟢 Low Priority</option>
            <option value="Medium">🟡 Medium Priority</option>
            <option value="High">🔴 High Priority</option>
          </select>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
