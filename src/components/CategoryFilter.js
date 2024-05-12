import React from "react";

function CategoryFilter({ categories, onFilter, activeCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onFilter(category)}
          className={category === activeCategory ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;