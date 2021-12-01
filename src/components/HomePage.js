import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
// import Todo from './Todo';

// eslint-disable-next-line
export const HomePage = ({ className }) => {
  // eslint-disable-next-line
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([todo, ...todos]);
  };

  return (
    <main className={className} id="home-page-container">
      <div className="today list">
        <h2>Today</h2>
        <TodoForm id="today" className="today" addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
      <div className="tomorrow list">
        <h2>Tomorrow</h2>
        <TodoForm id="tomorrow" className="tomorrow" addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </main>
  );
};
