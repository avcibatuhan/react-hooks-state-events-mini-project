import React from "react";

function CategoryFilter({categories,selectedCategory,onSelectCategory}) {
  const buttons = categories.map((value,index) => {
    return (
      <button key={index} className={value === selectedCategory ? "selected" : null}
      onClick={()=> onSelectCategory(value)}>
        {value}
      </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
{buttons}   
 </div>
  );
}

export default CategoryFilter;
