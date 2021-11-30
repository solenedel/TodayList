import React, { useState } from 'react';

const Form = () => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: newTask,
    // });
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
