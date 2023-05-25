import React from "react";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  console.log(todos);
  return (
    <>
      <h2>List</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              title={todo.title}
              id={todo.id}
              completed={todo.completed}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
