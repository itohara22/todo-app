import React from "react";

const TodoItem = ({ title, id, completed, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
