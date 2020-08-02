import React, { useContext } from "react";
import { CategoryContext } from "../context/Category";

const CategoryPicker = () => {
  const CATEGORIES = ["Front End", "Back End"];
  const [category, setCategory] = useContext(CategoryContext);

  return (
    <div className="categories__container">
      <ul className="categories">
        {CATEGORIES.map((cat) => (
          <li
            className={`categories__category ${category === cat ? 'categories__category--selected' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPicker;
