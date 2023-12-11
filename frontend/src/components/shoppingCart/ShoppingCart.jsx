import React from 'react'
import  { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios'

import './ShoppingCart.css'

  const ShoppingCart = ({}) => {
    const [cartItems, setCartItem] = useState(null);
    

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get("http://localhost:8088/api/cart/");

            setCartItem(response.data.postData);
        }

        getData();
    })
  



    

  return (
     <div>
         <div className="container parentCon">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <hr />
            <div>
            {
                cartItems?.length ? (
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
