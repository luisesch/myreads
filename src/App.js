import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Gallery from "./Gallery";
import SearchBook from "./SearchBook";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Gallery />} />
          <Route path="/search" element={<SearchBook />} />
        </Routes>
      </div>
    );
  }
}

export default App;
