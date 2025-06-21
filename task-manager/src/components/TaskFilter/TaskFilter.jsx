// src/components/TaskFilter/TaskFilter.jsx
import React, { useState } from 'react';

export function TaskFilter({ onFilterChange }) {
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');

  function handleStatusChange(e) {
    const val = e.target.value;
    setStatus(val);
    onFilterChange({ status: val || undefined, priority: priority || undefined });
  }

  function handlePriorityChange(e) {
    const val = e.target.value;
    setPriority(val);
    onFilterChange({ status: status || undefined, priority: val || undefined });
  }

  return (
    <div className="flex gap-4 mb-4">
      <select value={status} onChange={handleStatusChange} className="p-2 border rounded">
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <select value={priority} onChange={handlePriorityChange} className="p-2 border rounded">
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}
