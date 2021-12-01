/* eslint react/prop-types: 0 */

import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, removeTodo, toggleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
};

export default TodoList;
