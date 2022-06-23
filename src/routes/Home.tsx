import React, { useState } from "react";
import PendingTasks from "../components/pending_task/PendingTask";
import AddTask from "../components/add_task/AddTask";
import { ITask as ImportedTask } from "../App";

interface HomeTask {
  tasks: ImportedTask["tasks"];
  setTasks: React.Dispatch<React.SetStateAction<ImportedTask["tasks"]>>;
}
const Home: React.FC<HomeTask> = ({ tasks, setTasks }) => {
  return (
    <div>
      <h1>
        Joshua's Tasks
        <PendingTasks tasks={tasks} setTasks={setTasks} />
      </h1>
    </div>
  );
};

export default Home;
