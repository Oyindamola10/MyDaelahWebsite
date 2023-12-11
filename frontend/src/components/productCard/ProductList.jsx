import React from 'react'
import product from '../../product'
import ProductCard from './ProductCard'

const ProductList = ({handleClick}) => {
  return (
    <div className='productlistCard'>
       {product.map((item) =>(
         <ProductCard item={item} key={item.id} handleClick={handleClick}/>
       ))}
    </div>
  )
}

export default ProductList


