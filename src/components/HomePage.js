import React, { useEffect, useState } from 'react';
import ListContainer from './ListContainer';

// unique local storage key to store the todos
const LOCAL_STORAGE_KEY = 'todaylist-todos';

// eslint-disable-next-line
export const HomePage = ({ className }) => {
  // eslint-disable-next-line
  const [todos, setTodos] = useState([]);

  // clicking on the new list button
  const [list, setList] = useState({
    id: '',
    todos: [],
  });
  const [lists, setLists] = useState([{}]);

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
          console.log('removed: ', todo.id);
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

  // create a new list
  const addNewList = () => {};

  return (
    <main className={className}>
      <ListContainer
        todos={todos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
      <button type="button" onClick={addNewList}>
        New list
      </button>
    </main>
  );
};
