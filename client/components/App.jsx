import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "../state.js";
import Header from "./Header.jsx";
import Board from "./Board.jsx";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  useEffect(() => {
    axios("http://localhost:3000/api/tasks").then((res) => {
      const tasks = res.data;
      setTasks(tasks);
      console.log(tasks);
    });
  }, []);

  return (
    <>
      <Header />
      <Board />
    </>
  );
};

export default App;
