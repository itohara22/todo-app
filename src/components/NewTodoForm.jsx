import React, { useState } from "react";

const NewTodoForm = (props) => {
  const [newTask, setNewTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (newTask === "") return;
    props.onSubmitTodo(newTask);
    setNewTask("");
  };

  const inputChangeHandler = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form_row">
        <label htmlFor="new_task">New Task</label>
        <input
          type="text"
          id="new_task"
          onChange={inputChangeHandler}
          value={newTask}
        />
      </div>
      <button type="submit" className="form_btn">
        Add
      </button>
    </form>
  );
};

export default NewTodoForm;
