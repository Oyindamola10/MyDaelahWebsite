import React from "react";
import "./Men.css";
import { useAppContext } from "../../context/AppContext";
import addProductToCart from "../productCard/addProductToCart";

const Men = ({name, price, image }) => {
  // const { name, price, image } = item;
  const { incrCart } = useAppContext();

  const handleAddToCart = () => {
    incrCart();
    addProductToCart(item);
  }
  return (
    <div>
      <div className="cardMen">
        <div>
          <img src={image} alt="Vc silver" id="img2" />
          <h6>{name}</h6>
          <h6>{price}</h6>
          <p id="theShip">Ships in 24hrs</p>
          {/* <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span> */}
          <div>
            <button onClick={() => handleAddToCart()} >Add To Cart</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
