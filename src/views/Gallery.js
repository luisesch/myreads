import React, { Component } from "react";
import PropTypes from "prop-types";

import ListBooks from "./ListBooks";

class Gallery extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };

  render() {
    const { books, onChangeShelf } = this.props;

    const booksCurrently = books.filter(
      (book) => book.shelf === "currentlyReading"
    );

    const booksWant = books.filter((book) => book.shelf === "wantToRead");

    const booksRead = books.filter((book) => book.shelf === "read");

    return (
      <div>
        <ListBooks
          books={booksCurrently}
          header="Currently reading"
          onChangeShelf={onChangeShelf}
        />
        <ListBooks
          books={booksWant}
          header="Want to read"
          onChangeShelf={onChangeShelf}
        />
        <ListBooks
          books={booksRead}
          header="Read"
          onChangeShelf={onChangeShelf}
        />
      </div>
    );
  }
}

export default Gallery;
