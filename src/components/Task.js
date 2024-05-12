// Task.js
import React from "react";

function Task({ text, category, index, onDelete }) {
  const handleDelete = () => {
    onDelete(index); // Call onDelete function with index when delete button is clicked
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
