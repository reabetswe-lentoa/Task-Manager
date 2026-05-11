import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import taskService from './services/taskService';
import './App.css';

function App() {
  const [tasks, setTasks]   = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState('');

  // Load all tasks when the app starts
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await taskService.getAllTasks();
      setTasks(data);
    } catch (err) {
      setError('Could not connect to the API. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (newTask) => {
    try {
      const created = await taskService.createTask(newTask);
      setTasks([created, ...tasks]);
    } catch (err) {
      setError('Failed to add task.');
    }
  };

  const handleComplete = async (id) => {
    try {
      await taskService.completeTask(id);
      setTasks(tasks.map(t => t.id === id ? { ...t, isCompleted: true } : t));
    } catch (err) {
      setError('Failed to complete task.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await taskService.deleteTask(id);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (err) {
      setError('Failed to delete task.');
    }
  };

  // Count tasks for the summary bar
  const totalTasks     = tasks.length;
  const completedTasks = tasks.filter(t => t.isCompleted).length;
  const activeTasks    = totalTasks - completedTasks;

  return (
    <div className="app">
      <header className="app-header">
        <h1>📋 Task Manager</h1>
        <p className="app-subtitle">Built with .NET Core API + React</p>
      </header>

      <main className="app-main">
        {error && <div className="error-banner">{error} <button onClick={() => setError('')}>✕</button></div>}

        <AddTask onTaskAdded={handleAddTask} />

        <div className="task-summary">
          <span>📌 Total: <strong>{totalTasks}</strong></span>
          <span>⏳ Active: <strong>{activeTasks}</strong></span>
          <span>✅ Completed: <strong>{completedTasks}</strong></span>
        </div>

        <div className="filter-bar">
          <button className={filter === 'all'       ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
          <button className={filter === 'active'    ? 'active' : ''} onClick={() => setFilter('active')}>Active</button>
          <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Completed</button>
        </div>

        {loading
          ? <p className="loading">Loading tasks...</p>
          : <TaskList tasks={tasks} onComplete={handleComplete} onDelete={handleDelete} filter={filter} />
        }
      </main>
    </div>
  );
}

export default App;
