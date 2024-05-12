import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { render } from '@testing-library/react';
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filterTasksByCategory = (category) => {
    if (category === "All") {
      setTasks(TASKS); // Show all tasks
    } else {
      const filteredTasks = TASKS.filter(task => task.category === category);
      setTasks(filteredTasks); // Show tasks filtered by category
    }
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategorySelect={filterTasksByCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

test('does not contain specific element', () => {
  const { queryByText } = render(<CategoryFilter categories={["Grocery"]} />);
  const element = queryByText('Buy rice');
  expect(element).toBeNull();
});