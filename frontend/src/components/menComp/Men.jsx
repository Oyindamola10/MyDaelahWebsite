import React from "react";
import "./Men.css";
import { useAppContext } from "../../context/AppContext";

const Men = ({ image, name, price, }) => {
  const { incrCart } = useAppContext();

  return (
    <div>
      <div className="cardMen">
        <div>
          <img src={image} alt="Vc silver" id="img2" />
          <h6>{name}</h6>
          <h6>{price}</h6>
          <p>Ships in 24hrs</p>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <div>
            <button onClick={() => incrCart()} >Add To Cart</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
