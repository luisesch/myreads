import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchBook extends Component {
  render() {
    return (
      <div>
        <h1>Search</h1>
        <Link to="/">Back to main</Link>
      </div>
    );
  }
}

export default SearchBook;
