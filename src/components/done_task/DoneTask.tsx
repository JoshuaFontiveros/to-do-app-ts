import React from "react";
import { ITask as ImportedDoneTask } from "../../App";

interface IDoneTask {
  tasks: ImportedDoneTask["tasks"];
  setTasks: React.Dispatch<React.SetStateAction<ImportedDoneTask["tasks"]>>;
}
const DoneTask: React.FC<IDoneTask> = ({ tasks, setTasks }) => {
  const renderTasks = () => {
    return tasks.map((task) => {
      return (
        <React.Fragment key={task.id}>
          {task.status === "done" ? (
            <div>
              Task: {task.name} | Status: {task.status}
            </div>
          ) : (
            "No Done Tasks"
          )}
        </React.Fragment>
      );
    });
  };
  return <div>DoneTask: {renderTasks()}</div>;
};

export default DoneTask;
