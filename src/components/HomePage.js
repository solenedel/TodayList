import React, { useState } from 'react';
import TodoForm from './TodoForm';
// import Todo from './Todo';

// eslint-disable-next-line
export const HomePage = ({ className }) => {
  // eslint-disable-next-line
  const [todos, setTodos] = useState([]);

  return (
    <main className={className} id="home-page-container">
      <div className="today list">
        <h2>Today</h2>

        <TodoForm id="today" className="today" />
      </div>
      <div className="tomorrow list">
        <h2>Tomorrow</h2>

        <TodoForm id="tomorrow" className="tomorrow" />
      </div>
    </main>
  );
};
