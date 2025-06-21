// src/App.jsx
import React, { useState, useCallback, useMemo } from 'react';
import { TaskFilter } from './components/TaskFilter/TaskFilter';
import { TaskList } from './components/TaskList/TaskList';
import { v4 as uuid } from 'uuid';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: uuid(), title: 'Task 1', description: 'Description 1', status: 'pending',    priority: 'low',    dueDate: '2023-12-31' },
    { id: uuid(), title: 'Task 2', description: 'Description 2', status: 'in-progress',priority: 'medium', dueDate: '2024-01-01' },
    { id: uuid(), title: 'Task 3', description: 'Description 3', status: 'completed', priority: 'high',   dueDate: '2024-01-02' },
  ]);

  const [filters, setFilters] = useState({ status: undefined, priority: undefined });

  const handleFilterChange = useCallback(newFilters => {
    setFilters(newFilters);
  }, []);

  const filteredTasks = useMemo(
    () =>
      tasks.filter(t =>
        (!filters.status || t.status === filters.status) &&
        (!filters.priority || t.priority === filters.priority)
      ),
    [tasks, filters]
  );

  const handleStatusChange = useCallback((id, newStatus) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, status: newStatus } : t))
    );
  }, []);

  const handleDelete = useCallback(id => {
    setTasks(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}


