import ProductList from "../productCard/ProductList";
import CarouselCom from "./Carousel";
// import Button from 'react-bootstrap/Button';
// import "./Home.css";
// import ShopNowButton from '../ShopNowButton';
import classes from "./home.module.css";

const Home = ({ handleClick }) => {
  return (
    <>
      <div className="myHome">
        <CarouselCom />

        <div className={classes.cardImg2}>
          <div>
            <img
              src="https://i.imgur.com/o94hbEM.png"
              alt="watchImg1"
              id="watch1"
              width="100%"
            />

            <button id="btn3">
              <a href="/men">Shop Now</a>
            </button>
          </div>

          <div>
            <img
              src="https://i.imgur.com/EqQg1IH.jpg"
              alt=""
              id="watch2"
              width="100%"
            />

            <button id="btn3">
              <a href="/women">Shop Now</a>
            </button>
          </div>
        </div>
        <br />
        <h3 className="heading1">A Timepiece For All Occassions ciao</h3>

        <ProductList handleClick={handleClick} />
      </div>
    </>
  );
};

export default Home;
