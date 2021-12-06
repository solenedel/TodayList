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
  renameList,
}) => {
  // handle deleting a list when clicking on delete button
  const handleDeleteList = (id) => {
    deleteList(id);
    console.log('LIST DELETED, id:', list.id);
  };

  // handle renaming a list
  // const handleRenameList = (id) => {
  //   renameList(lol);
  // };

  return (
    <section key={list.id}>
      <div className="today list">
        {renameList('my list')}
        <TodoForm className="today" addTodo={addTodo} listId={list.id} />
        <TodoList
          todos={todos}
          deleteList={deleteList}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          addNewList={addNewList}
        />
        <button className="btn delete" type="button" onClick={() => handleDeleteList(list.id)}>
          Delete list
        </button>
        <button className="btn rename" type="button">
          Rename list
        </button>
      </div>
    </section>
  );
};

export default ListContainer;
