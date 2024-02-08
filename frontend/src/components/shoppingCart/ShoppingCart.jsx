import { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';
import "./ShoppingCart.css";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const [cartItems, setCartItem] = useState([]);

  const navigate = useNavigate();

  //subtotal function
  const calculateTotal = () => {
    console.log(cartItems)
    return cartItems.reduce((total, item) => Number(total) + Number(item.price) * Number(item.quantity), 0);
  };
 
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

  // console.log(cartItems)

  useEffect(() => {
    fetchCartItems();
  }, []);


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

                    <hr id="secondLine" />
                    {cartItems.map((item) => (
                      <CartItem
                      key={item._id}
                      item={item}
                      fetchCartItems={fetchCartItems} />
                    ))}
                  </div>
                ) : (
                  <div style={{ background: "White", color: "Black" }}>
                    <h3>Cart Empty</h3>
                  </div>
                )}
              </div>
              <div>
                <h4>SUB TOTAL:</h4>
              </div>
              <hr />
            </div>
            <div className="col-sm-12 col-md-8 otherDiv">
              <hr id="orderLine1" />
              <h4>Order Summary</h4>
              <hr id="orderLine2" />
              <p id="subTotal">Total: NGN{calculateTotal()}</p>

            </div>
            <div className="proceedBtn">
              <button id="Pbtn" onClick={()=>navigate("/checkout")}>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
