import React, { useState } from "react";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/Todolist";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true; 
  });

  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="app">
      <div className="todo-container">
        <h1 className="app-title">My To-Do List</h1>
        
        <TodoInput addTodo={addTodo} />
        
        {/* Filter buttons */}
        {todos.length > 0 && (
          <div className="filter-buttons">
            <button 
              className={`filter-button ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All ({todos.length})
            </button>
            <button 
              className={`filter-button ${filter === "active" ? "active" : ""}`}
              onClick={() => setFilter("active")}
            >
              Active ({activeCount})
            </button>
            <button 
              className={`filter-button ${filter === "completed" ? "active" : ""}`}
              onClick={() => setFilter("completed")}
            >
              Completed ({completedCount})
            </button>
          </div>
        )}
        
        <TodoList 
          todos={filteredTodos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
        
        {todos.length === 0 && (
          <div className="empty-state">
            No tasks yet. Add one above!
          </div>
        )}
        
        {todos.length > 0 && filteredTodos.length === 0 && (
          <div className="empty-state">
            No {filter} tasks found.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
