import React, { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import "./style.css";
import TodoFilter from "./components/TodoFilter";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterValue, setFilterValue] = useState("all");

  const newTodo = (newTask) => {
    setTodos((prevTodo) => {
      return [
        { title: newTask, id: Math.random(), completed: false },
        ...prevTodo,
      ];
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const filterChangeHandler = (taskStatus) => {
    setFilterValue(taskStatus);
  };

  const filteredTodo = todos.filter((todo) => {
    if (filterValue === "all") {
      return true;
    } else if (filterValue === "completed") {
      return todo.completed === true;
    } else {
      return todo.completed === false;
    }
  });

  return (
    <>
      <h1>Todo</h1>
      <NewTodoForm onSubmitTodo={newTodo} />
      <TodoFilter filterChange={filterChangeHandler} />
      <TodoList
        todos={filteredTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default App;
