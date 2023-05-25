import React from "react";

const TodoFilter = (props) => {
  
    const filterChangeHandler = (e) => {
    props.filterChange(e.target.value);
  };
  return (
    <div>
      <label>Filter</label>
      <select onChange={filterChangeHandler}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="notcompleted">Not Completed</option>
      </select>
    </div>
  );
};

export default TodoFilter;
