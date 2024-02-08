import React from "react";
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <img
        className="d-block w-100"
        src="https://i.imgur.com/MlO6TcB.jpg"
        alt="First slide"
      />
      <button size="lg" active id="Btn">
        <a href="/collections">Shop Now</a>
      </button>
    </div>
  );
};

export default Hero;
