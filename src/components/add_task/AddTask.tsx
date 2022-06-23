import React, { useState, FunctionComponent } from "react";

import { ITask as ImportedAddTask } from "../../App";

interface IAddTask {
  tasks: ImportedAddTask["tasks"];
  setTasks: React.Dispatch<React.SetStateAction<ImportedAddTask["tasks"]>>;
}

const AddTask: FunctionComponent<IAddTask> = ({ tasks, setTasks }) => {
  const [taskName, setTaskName] = useState("");

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTask(taskName);
    setTaskName("");
  };

  const triggerSetTask = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTaskName(e.target.value);
  };

  const addTask = (name: string) => {
    if (
      tasks.findIndex(
        (task) => task.name.toLowerCase() === taskName.toLowerCase()
      ) >= 0
    )
      alert("Task already exists");
    else {
      let newTask = {
        id: Math.random() * 10000,
        name: name,
        status: "pending",
      };
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Add Task"
          onChange={triggerSetTask}
          value={taskName}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  );
};

export default AddTask;
