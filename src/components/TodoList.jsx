import React from "react";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <>
      <h2>List</h2>
      <ul>
        {props.data.map((todo) => {
          return <TodoItem title={todo} />;
        })}
      </ul>
    </>
  );
};

export default TodoList;
