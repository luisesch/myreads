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

  updateQuery = (query) => {
    this.setState(() => ({
      query: query,
    }));
    this.searchBooks(query);
  };

  clearQuery = () => this.updateQuery("");

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

  render() {
    const { booksOnShelves, onChangeShelf } = this.props;
    const books = this.state.filteredBooks;

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
        {<ListBooks books={books} onChangeShelf={onChangeShelf} />}
      </div>
    );
  }
}

export default SearchBook;
