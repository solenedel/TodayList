/* eslint react/prop-types: 0 */
import React, { useState } from 'react';
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
  lists,
}) => {
  // state for collapsible 'rename list' button
  const [isOpenRename, setIsOpenRename] = useState(false);

  // handle deleting a list when clicking on delete button
  const handleDeleteList = (id) => {
    deleteList(id);
    console.log('LIST DELETED, id:', list.id);
  };

  const handleRenameInputChange = (e) => {
    // eslint-disable-next-line
    list.name = e.target.value;
  };

  const handleRenameFormSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line

    // make shallow copy of lists array
    const listsCopy = [...lists];

    // update the list who's name you are changing in new array copy
    listsCopy.name = e.target.value;

    console.log('listsCopy: ', listsCopy);
    // renameList();
  };

  return (
    <section key={list.id}>
      <div className="today list">
        {/* {renameList('my list')} */}
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
        <button
          className="btn rename"
          type="button"
          onClick={() => {
            setIsOpenRename(!isOpenRename);
          }}
        >
          Rename list
        </button>
        {isOpenRename && (
          <form id="rename-form" onSubmit={handleRenameFormSubmit}>
            <input type="text" placeholder="new name" onChange={handleRenameInputChange} />
            <button id="rename-btn" type="submit">
              confirm
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ListContainer;
