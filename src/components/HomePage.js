import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import ListContainer from './ListContainer';

// unique local storage key to store the todos
const LOCAL_STORAGE_KEY = 'todaylist-todos';

// eslint-disable-next-line
export const HomePage = ({ className }) => {
  // eslint-disable-next-line
  const [todos, setTodos] = useState([]);

  const [list, setList] = useState({
    id: '',
  });

  const [lists, setLists] = useState([]);

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
    // console.log(' list id ', list.id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // add a new list
  const addNewList = (l) => {
    setList({ ...list, id: uuid() });
    setLists([l, ...lists]);
    console.log('ADD NEW LIST: list id ', l.id);
  };

  // delete a list
  const deleteList = (id) => {
    console.log('DELETE LIST: id ', id);
    setLists(lists.filter((l) => l.id !== id));
  };

  return (
    <main className={className}>
      {lists.map((l) => (
        <ListContainer
          key={l.id}
          list={l}
          todos={todos}
          addTodo={addTodo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          deleteList={deleteList}
          addNewList={addNewList}
        />
      ))}
      <button type="button" onClick={addNewList}>
        New list
      </button>
    </main>
  );
};
