import React, { useState } from 'react';

// eslint-disable-next-line
const Form = (props) => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: newTask,
    });

    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="add new task" value={newTask} onChange={handleChange} />
      <button type="submit" className="tomorrow">
        <i className="fas fa-plus-circle" />
      </button>
    </form>
  );
};

export default Form;
