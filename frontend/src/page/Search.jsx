import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useAppContext } from "../context/AppContext";
import "./Search.css";

const SearchPage = () => {
  const [allProducts, setAllProducts] = useState([]);

  const [searchResults, setSearchResults] = useState([])

  const location = useLocation()

  const searchValue = location.search.split("?")[1]

  useEffect(() => {
    axios
      .get(`http://localhost:8088/api/product/`)
      .then(response => {
        setAllProducts(response.data)
      });
  }, [searchValue]);
  const { incrCart } = useAppContext();

  useEffect(() => {
    const filteredResults = allProducts.filter(product => product.name.toLowerCase().includes(searchValue))
    setSearchResults(filteredResults)
  }, [allProducts])

  return (
    <div>
      {searchResults?.length > 0 ? (
        <div className="searchCard">
          {searchResults.map((item) => (
            <div style={{ color: "black", background: "white" }}>
              <img src={item.image} />
              <p>{item.name}</p>
              {/* <p id='priceColor'>{item.Price}</p> */}
              <button onClick={() => incrCart()} id="btnSearch">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ background: "Black", color: "White" }}>
          No Search Results
        </div>
      )}
    </div>
  );
};

export default SearchPage;
