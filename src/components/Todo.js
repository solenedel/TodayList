/* eslint react/prop-types: 0 */
import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" />
      <li>{todo.task}</li>
      <button type="button">X</button>
    </div>
  );
};

export default Todo;
