import React, { useEffect, useState } from 'react';
import ListContainer from './ListContainer';

// unique local storage key to store the todos
const LOCAL_STORAGE_KEY = 'todaylist-todos';

// eslint-disable-next-line
export const HomePage = ({ className, lists, addNewList, deleteList }) => {
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
    console.log('ADD TODO: ID ', todo.id);
    console.log('todo', todo);
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
    console.log('REMOVE TODO: ID ', id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className={className}>
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
        />
      ))}
      {/* <button className="btn new-list" type="button" onClick={addNewList}>
        New list
      </button> */}
    </main>
  );
};
