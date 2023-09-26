import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import { useState } from "react";

function App() {
  const [todos, addTodo] = useState([]);

  const addTodoHandler = (text) => {
    addTodo([...todos, text]);
  };

  const deleteTodoHandler = (index) => {
    addTodo(todos.filter((_, idx) => idx !== index));
  };

  return (
    <div className="App">
      <h1>Список Дел</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
