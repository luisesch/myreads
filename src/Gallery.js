import React, { Component } from "react";
import { Link } from "react-router-dom";

class Gallery extends Component {
  render() {
    return (
      <div>
        <h1>Main</h1>
        <Link to="/search">Search</Link>
      </div>
    );
  }
}

export default Gallery;
