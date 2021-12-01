import React, { useState } from 'react';

// eslint-disable-next-line
const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
  });

  // update state of todo when user types in the input
  const handleInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  return (
    <form>
      <input
        type="text"
        name="task"
        placeholder="add new task"
        value={todo.task}
        onChange={handleInputChange}
      />
      <button type="submit" className="tomorrow">
        <i className="fas fa-plus-circle" />
      </button>
    </form>
  );
};

export default TodoForm;
