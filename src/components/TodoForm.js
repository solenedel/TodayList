import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

// eslint-disable-next-line
const TodoForm = ({ addTodo, listId }) => {
  const [todo, setTodo] = useState({
    id: '',
    listId,
    task: '',
    completed: false,
  });

  // update state of todo when user types in the input
  const handleInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  // handle form submission: add new todo and reset form to blank state
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });

      // reset task input
      setTodo({ ...todo, task: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder="add new task"
        value={todo.task}
        onChange={handleInputChange}
      />
      <button type="submit" className="tomorrow">
        <i className="fas fa-plus" />
      </button>
    </form>
  );
};

export default TodoForm;
