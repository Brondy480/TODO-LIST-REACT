import React, { useState } from 'react';
import './todo.css';

const Todo = () => {
  const [task, settask] = useState([]);
  const [newtask, setnewtask] = useState('');

  const addtask = () => {
    if (newtask.trim() !== '') {
      settask(t => [...t, newtask]);
      setnewtask('');
    }
  };

  const deleteTask = (index) => {
    const newtaskList = task.filter((_, i) => index !== i);
    settask(newtaskList);
  };

  const movetaskup = (i) => {
    if (i > 0) {
      const UpdatedTask = [...task];
      [UpdatedTask[i], UpdatedTask[i - 1]] = [UpdatedTask[i - 1], UpdatedTask[i]];
      settask(UpdatedTask);
    }
  };

  const movetaskdown = (i) => {
    if (i < task.length - 1) {
      const UpdatedTask = [...task];
      [UpdatedTask[i], UpdatedTask[i + 1]] = [UpdatedTask[i + 1], UpdatedTask[i]];
      settask(UpdatedTask);
    }
  };

  return (
    <div className="todo-container">
      <h1 className="title">📝 TODO LIST</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add your task here..."
          className="task-input"
          onChange={(e) => setnewtask(e.target.value)}
          value={newtask}
        />
        <button className="add-btn" onClick={addtask}>➕ Add</button>
      </div>
      <ul className="task-list">
        {task.map((task, index) => (
          <li className="task-item" key={index}>
            <span className="task-text">{task}</span>
            <div className="task-buttons">
              <button className="task-btn delete" onClick={() => deleteTask(index)}>🗑️</button>
              <button className="task-btn up" onClick={() => movetaskup(index)}>⬆️</button>
              <button className="task-btn down" onClick={() => movetaskdown(index)}>⬇️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
