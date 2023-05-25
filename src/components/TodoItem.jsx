import React from "react";

const TodoItem = (props) => {
  return (
    <li>
      <label>
        <input type="checkbox" />
        {props.title}
      </label>
      <button>Delete</button>
    </li>
  );
};

export default TodoItem;
