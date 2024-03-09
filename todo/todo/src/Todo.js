import React from 'react';

function Todo({ index, task, removeTodo }) {
  return (
    <div>
      {task}
      <button onClick={() => removeTodo(index)}>X</button>
    </div>
  );
}

export default Todo;
