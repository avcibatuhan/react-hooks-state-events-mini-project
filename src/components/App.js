import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  function RemoveTask(removedText) {
    setTasks(tasks.filter((task) => task.text !== removedText));
  }

  const tasksFiltered = tasks.filter((task) => {
      if(category === "All")
        return true;
      else
        return task.category === category
    } 
  );

 return (
     <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <div className="tasks">
        <h5>Tasks</h5>
        <NewTaskForm
          categories={CATEGORIES.filter((category) => category !== "All")}
          onTaskFormSubmit={onTaskFormSubmit}
        />
        <TaskList RemoveTask={RemoveTask} tasks={tasksFiltered} />
      </div>
    </div>
  );
}

export default App;
