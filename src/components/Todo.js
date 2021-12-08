/* eslint react/prop-types: 0 */
import React from 'react';

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  // handle checkbox click to trigger completion toggle
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  // handle click to delete todo
  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <div id="todo-input">
      <div className="todo-item">
        <input type="checkbox" /* checked={todo.completed} */ onClick={handleCheckboxClick} />
        <li
          style={{
            textDecoration: todo.completed ? 'line-through' : null,
          }}
        >
          {todo.task}
        </li>
      </div>
      <button id="remove-todo-btn" type="button" onClick={handleRemoveClick}>
        <i className="fas fa-times" />
      </button>
    </div>
  );
};

export default Todo;
