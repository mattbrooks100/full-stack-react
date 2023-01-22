import React, { useState } from "react";
import axios from "axios";
import { tasksState } from "../state.js";
import { useRecoilState } from "recoil";

const TaskForm = () => {
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useRecoilState(tasksState);

  const updateDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data: newTask } = await axios({
      url: "http://localhost:3000/api/tasks",
      method: "POST",
      data: { description },
    });

    setTasks([...tasks, newTask]);
    setDescription("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label>
        Description
        <input
          name="description"
          type="text"
          value={description}
          onChange={updateDescription}
        />
      </label>
    </form>
  );
};

export default TaskForm;
