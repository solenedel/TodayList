import React, { useState } from 'react';
import Form from './Form';

// eslint-disable-next-line
export const HomePage = ({ className }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return; // deal with extra whitespaces or blank input

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  return (
    <main className={className} id="home-page-container">
      <div className="today list">
        <h2>Today</h2>
        <Form id="today" className="today" onSubmit={addTodo} />
      </div>
      <div className="tomorrow list">
        <h2>Tomorrow</h2>
        <Form id="tomorrow" className="tomorrow" onSubmit={addTodo} />
      </div>
    </main>
  );
};
