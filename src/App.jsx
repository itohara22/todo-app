import React, { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import "./style.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const newTodo = (item) => {
    setTodos((prevItem) => {
      return [item, ...prevItem];
    });
    console.log(todos);
  };

  return (
    <>
      <h1>Todo</h1>
      <NewTodoForm onSubmitTodo={newTodo} />
      <TodoList data={todos} />
    </>
  );
};

export default App;
