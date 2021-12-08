import React, { useEffect, useState } from 'react';
import ListContainer from './ListContainer';

// unique local storage key to store the todos
const LOCAL_STORAGE_KEY = 'todaylist-todos';

// eslint-disable-next-line
export const HomePage = ({ className, lists, addNewList, deleteList, renameList }) => {
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

  // eslint-disable-next-line
  const showLists = () => {
    // eslint-disable-next-line
    if (!lists.length) {
      return (
        <p id="no-list-yet">
          You have no lists yet! Click on <span>New list</span> to get started.
        </p>
      );
    }
  };

  return (
    <main className={className}>
      {showLists()}
      {/* eslint-disable-next-line */}
      {lists.map((list) => (
        <ListContainer
          key={list.id}
          list={list}
          todos={todos.filter((todo) => todo.listId === list.id)}
          addTodo={addTodo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          deleteList={deleteList}
          renameList={renameList}
          lists={lists}
        />
      ))}
    </main>
  );
};
