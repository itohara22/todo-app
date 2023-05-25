import React from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import "./style.css";

const App = () => {
  return (
    <>
      <h1>Todo</h1>
      <NewTodoForm />
      <TodoList />
    </>
  );
};

export default App;
