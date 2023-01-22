import React from "react";

const Task = ({ task }) => {
  return (
    <div>
      <p>{task.description}</p>
      <p>{task.due_date}</p>
    </div>
  );
};

export default Task;
