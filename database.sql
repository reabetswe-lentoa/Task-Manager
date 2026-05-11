-- =============================================
-- Task Manager Database Setup Script
-- Run this in SQL Server Management Studio (SSMS)
-- =============================================

-- Step 1: Create the database
CREATE DATABASE TaskManagerDB;
GO

-- Step 2: Use the database
USE TaskManagerDB;
GO

-- Step 3: Create the Tasks table
CREATE TABLE Tasks (
    Id          INT IDENTITY(1,1) PRIMARY KEY,
    Title       NVARCHAR(200)   NOT NULL,
    Description NVARCHAR(1000)  NULL,
    IsCompleted BIT             NOT NULL DEFAULT 0,
    Priority    NVARCHAR(20)    NOT NULL DEFAULT 'Medium',
    CreatedAt   DATETIME        NOT NULL DEFAULT GETUTCDATE(),
    DueDate     DATETIME        NULL
);
GO

-- Step 4: Insert some sample tasks to test with
INSERT INTO Tasks (Title, Description, Priority, DueDate) VALUES
('Set up project repository',    'Create GitHub repo and push initial code',         'High',   DATEADD(DAY, 1,  GETUTCDATE())),
('Build REST API endpoints',     'Complete all CRUD endpoints for tasks controller', 'High',   DATEADD(DAY, 3,  GETUTCDATE())),
('Design React UI components',   'Build TaskList, AddTask, and filter components',   'Medium', DATEADD(DAY, 5,  GETUTCDATE())),
('Write unit tests',             'Add tests for all API controller methods',         'Medium', DATEADD(DAY, 7,  GETUTCDATE())),
('Deploy to Azure',              'Host the API on Azure App Service',                'Low',    DATEADD(DAY, 14, GETUTCDATE()));
GO

-- Verify the data was inserted
SELECT * FROM Tasks;
GO
