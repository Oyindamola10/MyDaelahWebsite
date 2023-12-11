import React from 'react'
import '../SideBar.css'

const Price = () => {
  return (
    <div>
      <h2 className="sidebar-title">Price</h2>
      <div className="sidebar-title2">
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> All
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> NGN0 - NGN20,000
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> NGN20,000- NGN100K
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> Over NGN100,000
        </label>
      </div>
    </div>
  )
}

export default Price