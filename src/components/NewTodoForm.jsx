import React, { useState } from "react";

const NewTodoForm = (props) => {
  const [newTask, setNewTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask("");
    props.onSubmitTodo(newTask);
  };

  const inputChangeHandler = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form_row">
        <label>New Task</label>
        <input
          type="text"
          id="new_task"
          onChange={inputChangeHandler}
          value={newTask}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodoForm;
