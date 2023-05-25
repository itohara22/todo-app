import React from "react";

const TodoItem = ({ title, id, completed, toggleTodo, deleteTodo }) => {
  return (
    <li className="todo_itm">
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        {title}
      </label>
      <button className="del_btn" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
