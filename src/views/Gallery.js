import React, { Component } from "react";
import PropTypes from "prop-types";

import ListBooks from "./ListBooks";
import EmptyShelf from "./EmptyShelf";

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
        <h1>Your books</h1>
        <div className="shelf-currently">
          <h2>Currently reading</h2>
          {booksCurrently.length > 0 ? (
            <ListBooks books={booksCurrently} onChangeShelf={onChangeShelf} />
          ) : (
            <EmptyShelf />
          )}
        </div>
        <div className="shelf-want">
          <h2>Want to read</h2>
          {booksWant.length > 0 ? (
            <ListBooks books={booksWant} onChangeShelf={onChangeShelf} />
          ) : (
            <EmptyShelf />
          )}
        </div>
        <div className="shelf-read">
          <h2>Have read</h2>
          {booksRead.length > 0 ? (
            <ListBooks books={booksRead} onChangeShelf={onChangeShelf} />
          ) : (
            <EmptyShelf />
          )}
        </div>
      </div>
    );
  }
}

export default Gallery;
