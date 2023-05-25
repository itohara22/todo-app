import React from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import "./style.css";

const App = () => {
  const newTodo = (item) => {
    console.log(item);
  };

  return (
    <>
      <h1>Todo</h1>
      <NewTodoForm onSubmitTodo={newTodo} />
      <TodoList />
    </>
  );
};

export default App;
