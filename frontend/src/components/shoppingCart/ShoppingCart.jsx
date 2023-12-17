import React from 'react'
import  { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

import './ShoppingCart.css'

  const ShoppingCart = ({}) => {
    const [cartItems, setCartItem] = useState(null);
    
    // fetch cart items
    const fetchCartItems = () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:8088/api/cart", requestOptions)
            .then(response => response.json())
            .then(result => setCartItem(result))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
       fetchCartItems();
    }, []);
  



    

  return (
     <div>
         <div className="container parentCon">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <hr />
            <div>
            {
                cartItems ? (
                    <div className>
                        {cartItems.map(item => (
                            <div style={{ color: 'white', background: 'black' }}>
                                <img src={item.image} />
                                <p>{item.name}</p>
                                {/* <p id='priceColor'>{item.Price}</p> */}
                                
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ background: 'White', color: "Black"}}>
                        Cart Empty
                    </div>
                )
            }
            </div>
            <hr />
          </div>
          <div class="col-sm-12 col-md-8"></div>
        </div>
     </div>
     </div>
  )
}

export default ShoppingCart
