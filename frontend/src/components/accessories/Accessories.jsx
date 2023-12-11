import React from 'react'
import './Accessories.css'

const Accessories = ({image, name, price,handleClick}) => {
  
  return (
    <>
        <div className="accessoriesCard">
        <div>
          <img src={image} alt="accessories" id="accessoriesCard2" />
          <h6>{name}</h6>
          <h6>{price}</h6>
          <p>Ships in 24hrs</p>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
        <div>
          <button className="accessoriesBtn" onClick={() => handleClick(image,name,price)}>Add to cart</button>
         
        </div>
        
      </div>
  
    
    </>
  )
}

export default Accessories