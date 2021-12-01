/* eslint react/prop-types: 0 */
import React from 'react';

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  // handle checkbox click to trigger completion toggle
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  // handle click to delete todo
  const handleRemoveClick = () => {
    removeTodo(todo.id); // bugging here
  };

  return (
    <div style={{ display: 'flex' }}>
      <input type="checkbox" checked={todo.completed} onClick={handleCheckboxClick} />
      <li
        style={{
          color: 'white',
          textDecoration: todo.completed ? 'line-through' : null,
        }}
      >
        {todo.task}
      </li>
      <button type="button" onClick={handleRemoveClick}>
        X
      </button>
    </div>
  );
};

export default Todo;
