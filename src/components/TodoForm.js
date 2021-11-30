import React from 'react';

// eslint-disable-next-line
const TodoForm = (props) => {
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
