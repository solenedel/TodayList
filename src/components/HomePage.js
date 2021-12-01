import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// unique local storage key to store the todos
const LOCAL_STORAGE_KEY = 'todaylist-todos';

// eslint-disable-next-line
export const HomePage = ({ className }) => {
  // eslint-disable-next-line
  const [todos, setTodos] = useState([]);

  // render todos saved in local storage (on refresh)
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  // save todos array to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // add a task to the todo list
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  // toggle to complete a task
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        // find the selected todo in the todos array
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed, // toggle completion status
          };
        }
        return todo;
      })
    );
  };

  // delete a todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className={className} id="home-page-container">
      <div className="today list">
        <h2>Today</h2>
        <TodoForm id="today" className="today" addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      </div>
      <div className="tomorrow list">
        <h2>Tomorrow</h2>
        <TodoForm id="tomorrow" className="tomorrow" addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      </div>
    </main>
  );
};
