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
    filteredBooks: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  searchBooks = (query) => {
    if (query !== "") {
      BooksAPI.search(query).then((books) => {
        this.setState(() => ({
          filteredBooks: books.length > 0 ? books : [],
        }));
      });
    } else {
      this.setState(() => ({
        filteredBooks: [],
      }));
    }
  };

  addToShelf = (newBook, shelf) => {
    BooksAPI.get(newBook.id).then((newBook) => {
      const bookidx = this.state.books.findIndex(
        (book) => book.title === newBook.title
      );
      let books = [...this.state.books];
      let book = { ...books[bookidx] };
      book.shelf = shelf;
      books[bookidx] = book;
      BooksAPI.update(newBook, shelf).then((newBook, shelf) => {
        this.setState(() => ({
          books,
        }));
      });
    });
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
                  books={this.state.filteredBooks}
                  onChangeShelf={this.addToShelf}
                  onSearchBooks={this.searchBooks}
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
