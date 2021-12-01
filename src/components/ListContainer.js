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
  const handleDeleteList = () => {
    deleteList(list.id);
  };

  return (
    <section>
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
