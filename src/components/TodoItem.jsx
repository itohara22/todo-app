import React from "react";

const TodoItem = () => {
  return (
    <ul>
      <li>
        <label>
          <input type="checkbox" />
          Item 1
        </label>
        <button>Delete</button>
      </li>
    </ul>
  );
};

export default TodoItem;
