import React from "react";
import { tasksState } from "../state.js";
import { useRecoilState } from "recoil";
import Task from "./Task.jsx";

const Complete = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  return (
    <div>
      <p>Complete</p>
      <div>
        {tasks
          .filter((task) => task.complete)
          .map((task) => (
            <Task key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default Complete;
