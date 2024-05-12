import React, { useState } from 'react';

function CategoryFilter({ categories, filterTasks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log("Selected Category:", category); // Log the selected category
    if (typeof filterTasks === 'function') {
      filterTasks(category === "All" ? null : category);
    } else {
      console.error('filterTasks is not a function');
    }
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button
        key="All"
        className={selectedCategory === "All" ? "selected" : ""}
        onClick={() => handleCategoryClick("All")}
      >
        All
      </button>
      {categories.map((category) => (
        category !== "All" && (
          <button
            key={category}
            className={selectedCategory === category ? "selected" : ""}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        )
      ))}
    </div>
  );
}

export default CategoryFilter;
