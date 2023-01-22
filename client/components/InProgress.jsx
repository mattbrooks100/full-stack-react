import React from "react";
import { tasksState } from "../state.js";
import { useRecoilState } from "recoil";
import Task from "./Task.jsx";

const InProgress = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  return (
    <div>
      <p>In Progress</p>
      <div>
        {tasks
          .filter((task) => task.in_progress)
          .map((task) => (
            <Task key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default InProgress;
