import React from 'react'
import './Collection.css'
// import product from '../../product'
// import Product from '../../../../Backend/models/Product'

const Collection = ({name, price, image,handleClick}) => {



  return (
    <>
      <div className="collectionCard">
        <div>
          <img src={image} alt="collections" id="collectionImg" />
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
          <button className="collectionBtn" onClick={()=>handleClick(image,name,price)}>Add to cart</button>
         {/* <Product></Product> */}
        </div>
      </div>
    </>
  )
}

export default Collection