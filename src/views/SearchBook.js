import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "../utils/BooksAPI";

import ListBooks from "./ListBooks";

class SearchBook extends Component {
  static propTypes = {
    booksOnShelves: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  };

  state = {
    query: "",
    filteredBooks: [],
  };

  // Update query in state when search input is changed
  updateQuery = (query) => {
    this.setState(() => ({
      query: query,
    }));
    this.searchBooks(query);
  };

  // Clear query
  clearQuery = () => this.updateQuery("");

  // Search books for search input
  searchBooks = async (query) => {
    if (query !== "") {
      const books = await BooksAPI.search(query);
      this.setState(() => ({
        filteredBooks: books.length > 0 ? books : [],
      }));
    } else {
      this.setState(() => ({
        filteredBooks: [],
      }));
    }
  };

  render() {
    const { booksOnShelves, onChangeShelf } = this.props;
    const books = this.state.filteredBooks;

    // Find books that are currently on a shelf and set shelf
    for (const bookOnShelf of booksOnShelves) {
      for (const book of books) {
        if (book.id === bookOnShelf.id) {
          book.shelf = bookOnShelf.shelf;
        }
      }
    }

    return (
      <div>
        <h1>Search for new books</h1>
        <div className="container-search-input">
          <input
            type="text"
            placeholder="Search books"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            className="input-search"
          />
          {this.state.query !== "" && (
            <button
              onClick={this.clearQuery}
              aria-label="Show all"
              className="button-delete"
            >
              <i className="fa fa-times"></i>
            </button>
          )}
        </div>
        {this.state.query !== "" && books.length <= 0 ? (
          <p>No results for your search</p>
        ) : (
          <ListBooks books={books} onChangeShelf={onChangeShelf} />
        )}
      </div>
    );
  }
}

export default SearchBook;
