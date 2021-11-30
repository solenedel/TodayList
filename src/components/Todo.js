/* import React from 'react';
// import Form from './Form';

const Todo = ({ todos }) => {
  // const [edit, setEdit] = useState({
  //   id: null,
  //   value: '',
  // });

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // eslint-disable-next-line
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row-complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
    </div>
  ));
};

export default Todo;

*/
