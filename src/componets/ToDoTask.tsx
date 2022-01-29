import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const ToDoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span className="left">{task.taskName}</span>
        <span>{task.deadline}</span>
        <button
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default ToDoTask;
