import React from "react";
import { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';

import "./ShoppingCart.css";

const ShoppingCart = ({}) => {
  const [cartItems, setCartItem] = useState(null);

  // fetch cart items
  const fetchCartItems = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8088/api/cart", requestOptions)
      .then((response) => response.json())
      .then((result) => setCartItem(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchCartItems();
  }, []);
  const handleRemoveItem = () => {
    const updatedCart = cartItems.filter(item => item.id !== item);
    setCartItem(updatedCart);
  };

  return (
    <>
      <div>
        <h3>Your Cart</h3>
        <div className="parentCon">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <div>
                {cartItems ? (
                  <div className>
                    <hr id="firstLine" />
                    <div className="items">
                      <p id="item">ITEM</p>
                      <div className="items2">
                        <p id="price">PRICE</p>
                        <p id="qty">QTY</p>
                        <p id="total">TOTAL</p>
                      </div>
                    </div>

                    <hr id="secondLine" />
                    {cartItems.map((item) => (
                      <div>
                        <img src={item.image} id="cartImg" />
                        <p id="forName">{item.name}</p>
                        <p id="forPrice">{item.price}</p>
                        <div id="theBtn">
                          <button type="submit" id="decrement">
                            -
                          </button>
                          <p id="pNum">1</p>
                          <button type="submit" id="increment">
                            +
                          </button>
                          <button id="delete" onClick={handleRemoveItem}>Delete</button>
                        </div>
                        <hr id="thirdLine" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ background: "White", color: "Black" }}>
                    Cart Empty
                  </div>
                )}
              </div>
              <hr />
            </div>
            <div class="col-sm-12 col-md-8 otherDiv">
              <hr />
              <p>My name is samiat</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
