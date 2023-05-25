import React, { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import "./style.css";
import TodoFilter from "./components/TodoFilter";

const App = () => {
  const [todos, setTodos] = useState([]);

  const newTodo = (title) => {
    setTodos((prevTodo) => {
      return [{ title, id: Math.random(), completed: false }, ...prevTodo];
    });
  };

  const toggleTodoCheckbox = (id, completed) => {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
      });
    });
  };

  return (
    <>
      <h1>Todo</h1>
      <NewTodoForm onSubmitTodo={newTodo} />
      <TodoFilter />
      <TodoList data={todos} toggleTodo={toggleTodoCheckbox} />
    </>
  );
};

export default App;
