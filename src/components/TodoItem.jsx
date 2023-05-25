import React from "react";

const TodoItem = (props) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={props.data.completed}
          onChange={(e) => props.toggleTodo(props.data.id, e.target.checked)}
        />
        {props.data.title}
      </label>
      <button>Delete</button>
    </li>
  );
};

export default TodoItem;
