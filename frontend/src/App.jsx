// import { useState } from 'react';
import {Link, Route, Routes} from "react-router-dom";
// import SideBar from './components/sidebar/SideBar';
import TopNavBar from "./components/navBar/TopNavBar";
import BottomNavBar from "./components/navBar/BottomNavBar";
import Home from "./components/hompePage/Home";
import AboutUs from "./components/abotUs/AboutUs";
import Login from "./components/myAccount/Login";
import SignUp from "./components/myAccount/SignUp";
import "./App.css";
// import { CartProvider } from "./context/CartContext";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import WomenList from "./components/womenComp/WomenList";
import MenList from "./components/menComp/MenList";
import AccessoriesList from "./components/accessories/AccessoriesList";
import CollectionList from "./components/collections/CollectionList";
import Contact from "./components/contact/Contact";
import {useState} from "react";
import Search from "./page/Search";
// import CheckOutPage from "./page/CheckOutPage"
import {useAppContext} from "./context/AppContext";
// import classes from "../src/components/navBar/topNav.module.css";
import {XMArkIcon} from "./assets/GlobalIcons";
import Blog from "./components/blog/Blog";
import CheckOutPage from "./page/CheckOutPage";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  const { cartNo:  showMobileMenu, setShowMobileMenu } = useAppContext();

  return (
    <>
      <div
        style={{
          overflow: showMobileMenu ? "hidden" : "auto",
        }}
      >
        <header>
          <TopNavBar size={cart.length} setShow={setShow}></TopNavBar>
          <BottomNavBar></BottomNavBar>
        </header>
        <main>
        
          <Routes>
            <Route path="/" element={<Home handleClick={handleClick} />} /> :
            <Route path="/about" element={<AboutUs />} />
            <Route
              path="/men"
              element={<MenList handleClick={handleClick} />}
            />
            <Route
              path="/women"
              element={<WomenList handleClick={handleClick} />}
            />
            <Route
              path="/accessories"
              element={<AccessoriesList handleClick={handleClick} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route
              path="/shopping"
              element={
                <ShoppingCart
                  cart={cart}
                  setCart={setCart}
                  handleChange={handleChange}
                />
              }
            />
            <Route
              path="/collections"
              element={<CollectionList handleClick={handleClick} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/checkout" element={<CheckOutPage/>}/>
          </Routes>

          {warning && (
            <div className="warning">
              Product is already added to your cart{" "}
            </div>
          )}
          {/* </CartProvider> */}
          {/* </Router> */}
        </main>
        <footer>
          <div className="AboutDaelah2">
            <h4>
              <a href="">Company Links</a>
            </h4>

            <h4 id="social">SociaL Media</h4>
            <a href="https://twitter.com/DaelahCo">
              <i className="fa-brands fa-twitter" id="Btn3"></i>
            </a>
            <a href="https://www.instagram.com/_daelahco/">
              <i className="fa-brands fa-instagram" id="Btn3"></i>
            </a>
            <a href="http://">
              <i className="fa-brands fa-pinterest" id="Btn3"></i>
            </a>
            <hr />
            <h6 id="myFooter">
              Copyright 2023 @DaelahCollectibles. All Rights Reserved by
              Adegbenro Samiat
            </h6>
          </div>
        </footer>

       
       
      </div>
    </>
  );
};

export default App;
