import React from 'react'
import { useState } from 'react';

const CartItem = ({item, fetchCartItems}) => {

    const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

    const handleRemoveItem = async (id) => {
      // console.log("product id", id)
        try {
          const requestOptions = {
            method: "DELETE",
            redirect: "follow",
          };
    
          const response = await fetch(
            `http://localhost:8088/api/cart/${id}`,
            requestOptions
          );
    
          console.log(response)
          fetchCartItems()
    
          // if (!response.ok) {
          //   throw new Error(`Failed to remove item. Status: ${response.status}`);
          // }
          // fetchCartItems();
    
          alert("Item removed successfully");
        } catch (error) {
          console.error("Error removing item:", error);
          alert("Error removing item. Please try again.");
        }
      };
  return (
    <div>
    <img src={item.image} id="cartImg" alt={item.name} />
    <p id="forName">{item.name}</p>
    <p id="forPrice">{item.price}</p>
    <div id="theBtn">
      <button type="button" id="decrement"  onClick={decreaseQuantity}>
        -
      </button>
      <p id="pNum">{quantity}</p>
      <button type="button" id="increment"   onClick={increaseQuantity}>
        +
      </button>
      <button type="button" id="delete" onClick={() => handleRemoveItem(item._id)}>
        Delete
      </button>
    </div>
    <hr id="thirdLine" />
    {/* <div>SUB TOTAL</div> */}
  </div>
  )
}

export default CartItem