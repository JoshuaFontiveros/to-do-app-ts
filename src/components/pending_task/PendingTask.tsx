import React, { FunctionComponent, useEffect } from "react";
import { ITask as ImportedPendingTask } from "../../App";

interface IPendingTask {
  tasks: ImportedPendingTask["tasks"];
  setTasks: React.Dispatch<React.SetStateAction<ImportedPendingTask["tasks"]>>;
}
const PendingTask: FunctionComponent<IPendingTask> = ({ tasks, setTasks }) => {
  const markTaskAsDone = (id: number) => (e: React.MouseEvent<HTMLElement>) => {
    tasks.find((task) => {
      if (task.id === id) {
        task.status = "done";
      }
      setTasks([...tasks]);
    });
  };

  const deleteTask = (id: number) => (e: React.MouseEvent<HTMLElement>) => {
    let deletedTask = tasks.filter((task) => task.id !== id);
    setTasks(deletedTask);
  };

  const renderTasks = (): JSX.Element[] => {
    return tasks?.map((task) => {
      return (
        <React.Fragment key={task.id}>
          {task.status === "pending" ? (
            <div>
              Task: {task.name} | status: {task.status}
              <button onClick={markTaskAsDone(task.id)}>
                Mark Task As Done
              </button>
              <button onClick={deleteTask(task.id)}>Delete Task</button>
            </div>
          ) : null}
        </React.Fragment>
      );
    });
  };
  return <div>{renderTasks()}</div>;
};

export default PendingTask;
