// src/components/TaskItem/TaskItem.jsx
import React from 'react';

export function TaskItem({ task, onStatusChange, onDelete }) {
  const isOverdue = new Date(task.dueDate) < new Date();

  return (
    <div
      className={`p-4 mb-2 border-l-4 rounded shadow-sm hover:bg-gray-50
        ${task.status === 'completed' ? 'border-green-500' : ''}
        ${task.status === 'in-progress' ? 'border-blue-500' : ''}
        ${task.status === 'pending' ? 'border-yellow-500' : ''}`}
    >
      <h3 className="text-lg font-semibold flex justify-between">
        {task.title}
        <button onClick={() => onDelete(task.id)} className="text-red-500">Delete</button>
      </h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      <div className="mt-2 flex items-center gap-4">
        <select
          value={task.status}
          onChange={e => onStatusChange(task.id, e.target.value)}
          className="p-1 border rounded"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <span className="text-sm">
          Priority: <strong>{task.priority}</strong>
        </span>
        <span className="text-sm">
          Due: <strong className={isOverdue ? 'text-red-600' : ''}>
            {new Date(task.dueDate).toLocaleDateString()}
          </strong>
        </span>
      </div>
    </div>
  );
}
