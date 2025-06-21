// src/components/TaskList/TaskList.jsx
import React from 'react';
import { TaskItem } from '../TaskItem/TaskItem';

export function TaskList({ tasks, onStatusChange, onDelete }) {
  if (!tasks.length) {
    return <p>No tasks found.</p>;
  }

  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
