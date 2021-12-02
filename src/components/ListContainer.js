/* eslint react/prop-types: 0 */
import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const ListContainer = ({
  list,
  addNewList,
  addTodo,
  todos,
  removeTodo,
  toggleComplete,
  deleteList,
}) => {
  // handle deleting a list when clicking on delete button
  const handleDeleteList = () => {
    deleteList(list.id);
    console.log('LIST DELETED, id:', list.id);
  };

  return (
    <section key={list.id}>
      <div className="today list">
        <h2>Today</h2>
        <TodoForm id="today" className="today" addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteList={deleteList}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          addNewList={addNewList}
        />
        <button type="button" onClick={handleDeleteList}>
          Delete list
        </button>
      </div>
    </section>
  );
};

export default ListContainer;
