import React from "react";
export default function TodoList({ todos, removeTask }) {
  return (
  <div>
    {todos.map((todo) => (
      <div key={todo.id} className="todo-item">
        <span className="todo-text">
          {todo.date || "--"} {todo.hora || "--"} : {todo.text}
        </span>
        <button onClick={() => removeTask(todo.id)}>X</button>
      </div>
    ))}
  </div>
);
}
