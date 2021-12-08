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
  renameList,
}) => {
  // state for collapsible 'rename list' button
  const [isOpenRename, setIsOpenRename] = useState(false);
  const [rename, setRename] = useState('');

  // handle deleting a list when clicking on delete button
  const handleDeleteList = (id) => {
    deleteList(id);
  };

  const handleRenameInputChange = (e) => {
    setRename(e.target.value);
  };

  const handleRenameFormSubmit = (e) => {
    e.preventDefault();

    renameList(list.id, rename);
    setIsOpenRename(false);
  };

  // eslint-disable-next-line
  const showListItems = () => {
    if (!todos.length) {
      return <div id="no-todos-yet">No tasks have been added.</div>;
    }
  };

  return (
    <section key={list.id} className="list-container">
      <div className="today list">
        <h2>{list.name}</h2>
        <TodoForm className="today" addTodo={addTodo} listId={list.id} />
        {todos.length ? (
          <TodoList
            todos={todos}
            deleteList={deleteList}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            addNewList={addNewList}
          />
        ) : (
          showListItems()
        )}
        <div className="btn-container">
          <button className="btn delete" type="button" onClick={() => handleDeleteList(list.id)}>
            Delete
          </button>
          <button
            className="btn rename"
            type="button"
            onClick={() => {
              setIsOpenRename(!isOpenRename);
            }}
          >
            Rename
          </button>
        </div>
        <div className="rename">
          {isOpenRename && (
            <form id="rename-form" onSubmit={handleRenameFormSubmit}>
              <input type="text" placeholder="new name" onChange={handleRenameInputChange} />
              <button id="rename-btn" type="submit">
                confirm
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ListContainer;
