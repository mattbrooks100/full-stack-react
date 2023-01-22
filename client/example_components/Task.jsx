import React, { useState } from "react";
import { tasksState } from "../state.js";
import { useRecoilState } from "recoil";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(task.description);
  const [tasks, setTasks] = useRecoilState(tasksState);

  const editTask = (id, currentValue) => {
    fetch(`http://localhost:3000/api/tasks/${id}`, {
      mode: "cors",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: currentValue }),
    })
      .then((res) => res.json())
      .then((updatedTask) => {
        console.log(tasks);
        const indexOfTaskToUpdate = tasks.findIndex((task) => task.id === id);
        const updateTasks = [...tasks];
        updateTasks[indexOfTaskToUpdate] = updatedTask;
        setTasks(updateTasks);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    editTask(task.id, currentValue);
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:3000/api/tasks/${id}`, {
      mode: "cors",
      method: "DELETE",
    }).then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
  };

  return (
    <div className="task">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Description
            <input
              name="description"
              value={currentValue}
              onChange={(e) => setCurrentValue(e.target.value)}
            />
          </label>
        </form>
      ) : (
        <span onClick={() => setIsEditing(true)}>{task.description}</span>
      )}
      <button onClick={() => console.log(task.id)}>x</button>
    </div>
  );
};

export default Task;
