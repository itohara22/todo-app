import React from "react";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <>
      <h2>List</h2>
      <ul>
        {props.data.map((todo) => {
          return (
            <TodoItem
              data={todo}
              key={todo.id}
              toggleTodo={props.toggleTodo}
              deleteTodo={props.deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
