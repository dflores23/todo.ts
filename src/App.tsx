import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import Header from "./componets/Header";
import ToDoTask from "./componets/ToDoTask";
import { ITask } from "./Interfaces";


const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask: ITask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task)=> {
      return task.taskName !== taskNameToDelete;
    }));
  }

 

  return (
    <div className="App">
      <Header/>
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Things to do"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Due in days"
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <>
          <ToDoTask key={key} task={task} completeTask={completeTask} />
          </>
        })}
      </div>
    </div>
  );
};

export default App;
