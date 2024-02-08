import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import product from '../../product'
import ProductCard from './ProductCard'

// import CarouselCom from '../hompePage/Carousel'
const ProductList = ({handleClick}) => {
  return (
    <div className='productlistCard'>
      <Carousel>
        <Carousel.Item>
         <div className='productCarousel'>
         {
            product.slice(0,4).map((item)=>(
              <ProductCard item={item} key={item.id} handleClick={handleClick}/>
            ))
           
          }
         </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="productCarousel">
          {
            product.slice(4,8).map((item)=>(
              <ProductCard item={item} key={item.id} handleClick={handleClick}/>
            ))
           
          }
          </div>
        </Carousel.Item>
      </Carousel>
       {/* {product.map((item) =>(
         <ProductCard item={item} key={item.id} handleClick={handleClick}/>
         
       ))} */}
    </div>
  )
}

export default ProductList


