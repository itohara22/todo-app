import React from "react";

const SearchTodo = (props) => {
  const searchChangeHandler = (e) => {
    props.onSearch(e.target.value);
  };
  return (
    <div className="todo_filter">
      <label>Search</label>
      <input type="text" onChange={searchChangeHandler} />
    </div>
  );
};

export default SearchTodo;
