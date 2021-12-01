/* eslint react/prop-types: 0 */
import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const ListContainer = ({ addTodo, todos, removeTodo, toggleComplete }) => {
  return (
    <section>
      <div className="today list">
        <h2>Today</h2>
        <TodoForm id="today" className="today" addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      </div>
    </section>
  );
};

export default ListContainer;
