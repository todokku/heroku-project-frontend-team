import React from "react";
import { Link } from "react-router-dom";

import "./Search.scss";

function Search() {
  return (
    <div>
      Search:
      <br></br>
      <Link to="/product/1">Product 1 Details</Link>
    </div>
  );
}

export default Search;