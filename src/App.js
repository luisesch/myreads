import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";

import Navbar from "./views/Navbar";
import Gallery from "./views/Gallery";
import SearchBook from "./views/SearchBook";
import "./App.css";

class App extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
      console.log(this.state.books);
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <main className="main">
          <Routes>
            <Route
              exact
              path="/"
              element={<Gallery books={this.state.books} />}
            />
            <Route
              path="/search"
              element={<SearchBook books={this.state.books} />}
            />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
