import React, { useState } from 'react';

// eslint-disable-next-line
const TodoForm = (props) => {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
  });

  return (
    <form>
      <input type="text" placeholder="add new task" />
      <button type="submit" className="tomorrow">
        <i className="fas fa-plus-circle" />
      </button>
    </form>
  );
};

export default TodoForm;
