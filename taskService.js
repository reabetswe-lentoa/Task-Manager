// This file handles all communication between React and the .NET Core API
const API_URL = 'http://localhost:5000/api/tasks';

const taskService = {

  // Get all tasks
  getAllTasks: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch tasks');
    return response.json();
  },

  // Create a new task
  createTask: async (task) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    });
    if (!response.ok) throw new Error('Failed to create task');
    return response.json();
  },

  // Mark a task as complete
  completeTask: async (id) => {
    const response = await fetch(`${API_URL}/${id}/complete`, {
      method: 'PATCH'
    });
    if (!response.ok) throw new Error('Failed to complete task');
    return response.json();
  },

  // Delete a task
  deleteTask: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete task');
    return response.json();
  }
};

export default taskService;
