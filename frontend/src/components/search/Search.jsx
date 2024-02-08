import React, { useState } from "react";
import { Form } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const search = (e) => {
    const { value } = e.target;
    if (!value.length) {
      return;
    }
    navigate(`/search?${value}`);
  };

  return (
    <input
      type="text"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          search(e);
        }
      }}
      placeholder="Search "
      className="me-2"
      aria-label="Search"
    />
  );
};

export default Search;
