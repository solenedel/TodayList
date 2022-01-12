/* eslint react/prop-types: 0 */
import React from 'react';

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  // mark as complete
  const handleComplete = () => {
    toggleComplete(todo.id);
  };
  // handle click to delete todo
  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <div id="todo-input">
      <div className="todo-item">
        {/* eslint-disable-next-line */}
        <div className="todo-optns" >
          <button id="complete-todo-btn" type="button" onClick={handleComplete}>
            {todo.completed ? (
              <i className="far fa-check-square" />
            ) : (
              <i className="far fa-square" />
            )}
          </button>
          <button id="remove-todo-btn" type="button" onClick={handleRemoveClick}>
            <i className="fas fa-times" />
          </button>
        </div>

        <li
          style={{
            textDecoration: todo.completed ? 'line-through' : null,
          }}
        >
          {todo.task}
        </li>
      </div>
    </div>
  );
};

export default Todo;
