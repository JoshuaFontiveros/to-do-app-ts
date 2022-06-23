import React, { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import AddTask from "./components/add_task/AddTask";
import DoneTask from "./components/done_task/DoneTask";
import PendingTask from "./components/pending_task/PendingTask";
import Home from "./routes/Home";

export interface ITask {
  tasks: {
    id: number;
    name: string;
    status: string;
  }[];
}

const App = () => {
  const renderBtnLinks = (): JSX.Element => {
    return (
      <>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/add-tasks">Add Task</Link>
        </button>
        <button>
          <Link to="/pending-tasks">Pending Tasks</Link>
        </button>
        <button>
          <Link to="/done-tasks">Done Tasks</Link>
        </button>
      </>
    );
  };

  const renderRoutes = (): JSX.Element => {
    return (
      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route
          path="/add-tasks"
          element={<AddTask tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/pending-tasks"
          element={<PendingTask tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/done-tasks"
          element={<DoneTask tasks={tasks} setTasks={setTasks} />}
        />
      </Routes>
    );
  };

  const [tasks, setTasks] = useState<ITask["tasks"]>([]);

  return (
    <>
      {renderBtnLinks()} {renderRoutes()}
    </>
  );
};

export default App;
