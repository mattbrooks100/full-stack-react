import React from "react";
import { tasksState } from "../state.js";
import { useRecoilState } from "recoil";
import Task from "./Task.jsx";

const ToDo = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  return (
    <div>
      <p>To Do</p>
      <div>
        {tasks
          .filter((task) => task.to_do)
          .map((task) => (
            <Task key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default ToDo;
