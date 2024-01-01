import React from 'react'
import './ProductCard.css'

import './ProductCard.css'
import { useAppContext } from '../../context/AppContext';
import addProductToCart from './addProductToCart';

const ProductCard = ({ item, }) => {
  const { name, price, image } = item;
  const { incrCart } = useAppContext();
 
  const handleAddToCart = () => {
    incrCart();
    addProductToCart(item);
  }
  return (
    <>
      <div>
        <div className="productCard">
          <div>
            <img src={image} alt="products" id="productsId" />
            <h6 id='theProduct'>{name}</h6>
            <h6 id='theProduct1'>{price}</h6>
            <p id='theProduct2'>Ships in 24hrs</p>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
          <div>
            <button className="womenBtn"
              onClick={() => handleAddToCart()}>Add to cart</button>


          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard