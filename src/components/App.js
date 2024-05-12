// App.js
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredCategory, setFilteredCategory] = useState("All");

  const filterTasks = category => {
    setFilteredCategory(category);
  };

  const addTask = task => {
    setTasks([...tasks, task]);
  };

  const deleteTask = index => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks =
    filteredCategory === "All"
      ? tasks
      : tasks.filter(task => task.category === filteredCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onFilter={filterTasks}
        activeCategory={filteredCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} /> {/* Pass deleteTask function as onDeleteTask prop */}
    </div>
  );
}

export default App;
