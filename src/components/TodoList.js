/* eslint react/prop-types: 0 */

import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
