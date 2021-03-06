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

  // Get all books that are currently assigned to a shelf
  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({
      books,
    });
  }

  // Find book via API and add to shelf
  addToShelf = async (book, shelf) => {
    BooksAPI.update(book, shelf);
    const newBook = await BooksAPI.get(book.id);
    const booksWithoutChanged = this.state.books.filter(
      (book) => book.id !== newBook.id
    );
    newBook.shelf = shelf;
    this.setState(() => ({
      books: [...booksWithoutChanged, newBook],
    }));
  };

  render() {
    return (
      <div>
        <Navbar />
        <main className="main">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Gallery
                  books={this.state.books}
                  onChangeShelf={this.addToShelf}
                />
              }
            />
            <Route
              path="/search"
              element={
                <SearchBook
                  booksOnShelves={this.state.books}
                  onChangeShelf={this.addToShelf}
                />
              }
            />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
