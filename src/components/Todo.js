/* eslint react/prop-types: 0 */
import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div style={{ display: 'flex' }}>
      <input type="checkbox" />
      <li
        style={{
          color: 'white',
          textDecoration: todo.completed ? 'line-through' : null,
        }}
      >
        {todo.task}
      </li>
      <button type="button">X</button>
    </div>
  );
};

export default Todo;
