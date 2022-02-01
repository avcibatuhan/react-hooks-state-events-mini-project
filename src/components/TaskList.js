import React from "react";
import Task from "./Task";
function TaskList({tasks, RemoveTask}) {
  const taskList = tasks.map((task,index)=>(
    <Task key={index} text={task.text} category={task.category} RemoveTask={RemoveTask} />
  ))
  return (
    <div className="tasks">
    {taskList}
    </div>
  );
}

export default TaskList;
