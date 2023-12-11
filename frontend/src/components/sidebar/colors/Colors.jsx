import React from 'react'
import '../SideBar.css'

const Colors = () => {
  return (
    <div>
      <h2 className="sidebar-title">Colors</h2>
      <div className="sidebar-title2">
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> All
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> Silver
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> Black
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> Gold
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> Rosegold
        </label>
      </div>
    </div>
  )
}

export default Colors