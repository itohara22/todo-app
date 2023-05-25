import React from "react";

const TodoFilter = () => {
  return (
    <div>
      <label>Filter</label>
      <select>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="notcompleted">Not Completed</option>
      </select>
    </div>
  );
};

export default TodoFilter;
