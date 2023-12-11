import React from "react";
import "../SideBar.css";

const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div className="sidebar-title2">
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> <a href="/">All</a>
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /><a href="/men"> Men</a>
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> <a href="/women">Women</a>
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> <a href="/accessories">Accessories</a>
        </label>
      </div>
    </div>
  );
};

export default Category;
