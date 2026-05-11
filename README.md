# 📋 Task Manager

A full-stack Task Manager application built with **.NET Core Web API** (backend) and **React** (frontend), backed by **SQL Server**. Demonstrates RESTful API design, frontend-backend integration, and clean component-based UI development.

---

## 📋 Overview

This application allows users to create, manage, prioritise, and track tasks through a clean and responsive interface. The frontend communicates with the backend via a RESTful API, with all data persisted in a SQL Server database.

---

## ✨ Features

- ➕ **Create tasks** with title, description, priority, and due date
- ✅ **Mark tasks as complete**
- 🗑️ **Delete tasks**
- 🔍 **Filter tasks** by All / Active / Completed
- 📊 **Task summary bar** showing total, active, and completed counts
- 🎨 **Priority colour coding** — High (red), Medium (orange), Low (green)
- 📱 **Fully responsive** — works on mobile and desktop

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend API | C# / .NET Core 6 / ASP.NET Core Web API |
| Database | SQL Server + Entity Framework Core |
| Frontend | React 18 / JavaScript / CSS |
| API Docs | Swagger UI |
| Version Control | Git / GitHub |

---

## 🏗️ Project Structure

```
TaskManager/
├── TaskManagerAPI/               → .NET Core Backend
│   ├── Controllers/
│   │   └── TasksController.cs    → All API endpoints (CRUD)
│   ├── Models/
│   │   └── TaskItem.cs           → Task data model
│   ├── Data/
│   │   └── AppDbContext.cs       → Entity Framework DB context
│   ├── Program.cs                → App configuration & startup
│   └── appsettings.json          → Connection string config
│
├── task-manager-client/          → React Frontend
│   └── src/
│       ├── components/
│       │   ├── AddTask.js        → Form to add new tasks
│       │   └── TaskList.js       → Renders task cards
│       ├── services/
│       │   └── taskService.js    → API call functions
│       ├── App.js                → Main app component
│       └── App.css               → Styling
│
├── database.sql                  → SQL Server setup script
└── .gitignore
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/{id}` | Get task by ID |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/{id}` | Update a task |
| PATCH | `/api/tasks/{id}/complete` | Mark task as complete |
| DELETE | `/api/tasks/{id}` | Delete a task |

---

## ⚙️ Getting Started

### Prerequisites

- [.NET 6 SDK](https://dotnet.microsoft.com/download)
- [Node.js v16+](https://nodejs.org)
- [SQL Server](https://www.microsoft.com/en-us/sql-server)
- [Visual Studio](https://visualstudio.microsoft.com/) or [VS Code](https://code.visualstudio.com/)

---

### 1. Database Setup

- Open **SQL Server Management Studio (SSMS)**
- Open and run the `database.sql` file
- This creates the `TaskManagerDB` database and sample tasks

---

### 2. Backend Setup

```bash
cd TaskManagerAPI
dotnet restore
dotnet run
```

The API will run at `http://localhost:5000`
Swagger docs available at `http://localhost:5000/swagger`

---

### 3. Frontend Setup

```bash
cd task-manager-client
npm install
npm start
```

The React app will run at `http://localhost:3000`

---

## 📸 Screenshots

> _Add screenshots of your running app here_

---

## 🚀 Future Improvements

- Add user authentication with JWT
- Implement task categories and tags
- Add due date reminders and notifications
- Deploy backend to Azure App Service
- Deploy frontend to Azure Static Web Apps

---

## 👨‍💻 Author

**Reabetswe Lentoa**
Software Developer | C# · .NET Core · React · SQL Server
[LinkedIn](https://linkedin.com/in/reabetswe-lentoa) · [GitHub](https://github.com/reabetswe-lentoa)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
