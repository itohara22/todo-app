import React from "react";

const NewTodoForm = () => {
  return (
    <form>
      <div className="form_row">
        <label>New Task</label>
        <input type="text" id="new_task" />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodoForm;
