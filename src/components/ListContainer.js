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
        <button
          className="btn rename"
          type="button"
          onClick={() => {
            setIsOpenRename(!isOpenRename);
          }}
        >
          Rename list
        </button>
        {isOpenRename && <div>TEST</div>}
      </div>
    </section>
  );
};

export default ListContainer;
