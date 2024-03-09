import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo key={index} index={index} task={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default TodoList;
