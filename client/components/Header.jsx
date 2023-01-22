import React from "react";
import CreateNewTask from "./CreateNewTask";

const Header = () => {
  return (
    <>
      <div className="header">
        <CreateNewTask />
        Your Kanban Board
      </div>
    </>
  );
};

export default Header;
