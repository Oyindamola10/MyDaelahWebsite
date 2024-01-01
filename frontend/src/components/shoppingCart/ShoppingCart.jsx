import {useEffect, useState} from "react";
// import { useParams } from 'react-router-dom';
import "./ShoppingCart.css";

const ShoppingCart = () => {
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
  const handleRemoveItem = async (id) => {
    try {
      const requestOptions = {
        method: "DELETE",
        redirect: "follow",
      };

      const response = await fetch(`http://localhost:8088/api/cart/${id}`, requestOptions);

      if (!response.ok) {
        throw new Error(`Failed to remove item. Status: ${response.status}`);
      }
       fetchCartItems();

      alert('Item removed successfully');
    } catch (error) {
      console.error("Error removing item:", error);
      alert('Error removing item. Please try again.');
    }
  };


  return (
    <>
      <div>

        <div className="parentCon">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <div>
                {cartItems ? (
                  <div className>
                    <h3 id="theCart">Your Cart</h3>
                    <hr id="firstLine" />
                    <div className="items">
                      <p id="item">ITEM</p>
                      <div className="items2">
                        <p id="price">PRICE</p>
                        <p id="qty">QTY</p>
                        <p id="total">TOTAL</p>
                      </div>
                    </div>
                       <div>SUB TOTAL</div>
                    <hr id="secondLine" />
                    {cartItems.map((item, index) => (

                        <div key={index}>
                          <img src={item.image} id="cartImg" alt={item.name} />
                          <p id="forName">{item.name}</p>
                          <p id="forPrice">{item.price}</p>
                          <div id="theBtn">
                            <button type="button" id="decrement">
                              -
                            </button>
                            <p id="pNum">1</p>
                            <button type="button" id="increment">
                              +
                            </button>
                            <button type="button" id="delete" onClick={() => handleRemoveItem(item._id)}>
                              Delete
                            </button>
                          </div>
                          <hr id="thirdLine" />
                        </div>
                    ))}

                  </div>

                ) : (
                  <div style={{ background: "White", color: "Black" }}>
                    <h3>Cart Empty</h3>
                  </div>
                )}
              </div>
              <hr />
            </div>
            <div className="col-sm-12 col-md-8 otherDiv">
              <hr id="orderLine" />
               <h4>Order Summary</h4>
               <hr id="orderLine"/>
               <p id="subTotal">Sub Total   NGN0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
