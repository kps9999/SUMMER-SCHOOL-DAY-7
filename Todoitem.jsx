import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="todo-checkbox"
        />
        <span
          className={`todo-text ${todo.completed ? 'completed' : ''}`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
      </div>
      
      <button
        onClick={() => deleteTodo(todo.id)}
        className="delete-button"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
