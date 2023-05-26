import React, { useEffect, useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import SearchTodo from "./components/SearchTodo";

import "./style.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterValue, setFilterValue] = useState("all");
  const [searchValue, setSearchvalue] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => data.slice(0, 5))
      .then((slicedData) =>
        setTodos((prevTodo) => prevTodo.concat(slicedData))
      );
  }, []);

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

  const searchHandler = (searchText) => {
    setSearchvalue(searchText);
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

  const searchedTodo = filteredTodo.filter((todo) => {
    if (searchValue === "") {
      return true;
    } else {
      return todo.title.toLowerCase().includes(searchValue.toLowerCase());
    }
  });

  return (
    <>
      <h1>Todo</h1>
      <NewTodoForm onSubmitTodo={newTodo} />
      <SearchTodo onSearch={searchHandler} />
      <TodoFilter filterChange={filterChangeHandler} />
      <TodoList
        todos={searchedTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default App;
